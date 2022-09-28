import { fireEvent, screen, render, within } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Dropdown } from '../Dropdown';
import { DropdownItem } from '../DropdownItem';
import { DropdownMenu } from '../DropdownMenu';
import { DropdownSection } from '../DropdownSection';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Provider } from '../Provider';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/react - Dropdown', () => {
	it('should have no accessibility violations', async () => {
		const { container } = render(
			<Provider>
				<Dropdown isOpen>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu>
						<DropdownItem key="ardvark" startIcon={<>icon</>}>
							Ardvark
						</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
						<DropdownSection title="Section">
							<DropdownItem key="dog">Dog</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	it('should render and support selection', async () => {
		const onAction = jest.fn();

		render(
			<Provider>
				<Dropdown>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu onAction={onAction}>
						<DropdownItem key="ardvark">Ardvark</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		expect(screen.queryByRole('menu')).toBeNull();

		fireEvent.click(screen.getByRole('button'));

		const menu = screen.getByRole('menu');
		const items = within(menu).getAllByRole('menuitem');

		expect(menu).toBeVisible();
		expect(items).toHaveLength(3);

		await userEvent.click(screen.getByText('Ardvark'));

		expect(onAction).toHaveBeenCalled();
	});

	it('should keyboard navigation', () => {
		const onAction = jest.fn();

		render(
			<Provider>
				<Dropdown>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu onAction={onAction}>
						<DropdownItem key="ardvark">Ardvark</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		expect(screen.queryByRole('menu')).toBeNull();

		fireEvent.keyDown(screen.getByRole('button'), { key: ' ', code: 32, charCode: 32 });

		const menu = screen.getByRole('menu');
		const items = within(menu).getAllByRole('menuitem');

		expect(menu).toBeVisible();
		expect(items).toHaveLength(3);

		const selectedItem = items[0];

		expect(selectedItem).toBe(document.activeElement);

		fireEvent.keyDown(selectedItem, { key: 'ArrowDown', code: 40, charCode: 40 });

		const nextSelectedItem = items[1];

		expect(nextSelectedItem).toBe(document.activeElement);

		fireEvent.keyDown(nextSelectedItem, { key: 'ArrowUp', code: 38, charCode: 38 });

		expect(selectedItem).toBe(document.activeElement);

		fireEvent.keyDown(nextSelectedItem, { key: ' ', code: 32, charCode: 32 });

		expect(onAction).toHaveBeenCalled();
	});

	it('should support disabled keys', () => {
		const onAction = jest.fn();

		render(
			<Provider>
				<Dropdown>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu disabledKeys={['kangaroo']} onAction={onAction}>
						<DropdownItem key="ardvark">Ardvark</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		expect(screen.queryByRole('menu')).toBeNull();

		fireEvent.click(screen.getByRole('button'));

		const menu = screen.getByRole('menu');
		const items = within(menu).getAllByRole('menuitem');

		expect(menu).toBeVisible();
		expect(items).toHaveLength(3);

		expect(items[1]).toHaveAttribute('aria-disabled', 'true');

		fireEvent.click(items[1]);

		expect(onAction).not.toHaveBeenCalled();
	});

	it('should support single selection', () => {
		const onSelectionChange = jest.fn();

		render(
			<Provider>
				<Dropdown>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu
						disabledKeys={['kangaroo']}
						onSelectionChange={onSelectionChange}
						selectionMode="single"
					>
						<DropdownItem key="ardvark">Ardvark</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		expect(screen.queryByRole('menu')).toBeNull();

		fireEvent.click(screen.getByRole('button'));

		const menu = screen.getByRole('menu');
		const items = within(menu).getAllByRole('menuitemradio');

		expect(menu).toBeVisible();
		expect(items).toHaveLength(3);

		expect(items[1]).toHaveAttribute('aria-checked', 'false');
		expect(items[1]).toHaveAttribute('aria-disabled', 'true');

		fireEvent.click(items[1]);

		expect(onSelectionChange).not.toHaveBeenCalled();

		fireEvent.click(items[0]);

		expect(onSelectionChange).toHaveBeenCalled();
	});

	it('should support multi selection', () => {
		const onSelectionChange = jest.fn();

		render(
			<Provider>
				<Dropdown>
					<IconButton variant="primary">
						<Icon icon="expand_more" />
					</IconButton>
					<DropdownMenu
						disabledKeys={['kangaroo']}
						onSelectionChange={onSelectionChange}
						selectionMode="multiple"
					>
						<DropdownItem key="ardvark">Ardvark</DropdownItem>
						<DropdownItem key="kangaroo">Kangaroo</DropdownItem>
						<DropdownItem key="snake">Snake</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</Provider>,
		);

		expect(screen.queryByRole('menu')).toBeNull();

		fireEvent.click(screen.getByRole('button'));

		const menu = screen.getByRole('menu');
		const items = within(menu).getAllByRole('menuitemcheckbox');

		expect(menu).toBeVisible();
		expect(items).toHaveLength(3);

		fireEvent.click(items[0]);

		expect(items[0]).toHaveAttribute('aria-checked', 'true');

		expect(onSelectionChange).toHaveBeenCalled();

		expect(items[1]).toHaveAttribute('aria-checked', 'false');
		expect(items[1]).toHaveAttribute('aria-disabled', 'true');

		fireEvent.click(items[1]);

		expect(onSelectionChange).toHaveBeenCalledTimes(1);

		fireEvent.click(items[2]);

		expect(items[2]).toHaveAttribute('aria-checked', 'true');

		expect(onSelectionChange).toHaveBeenCalledTimes(2);
	});
});
