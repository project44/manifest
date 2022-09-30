import {
	accessibility,
	act,
	fireEvent,
	screen,
	render,
	within,
	waitFor,
	userEvent,
} from '@project44-manifest/test-utils';
import { MultiSelect, SelectItem, SelectSection } from '../src';

describe('@project44-manifest/react - MultiSelect', () => {
	describe('render', () => {
		accessibility(
			<MultiSelect label="Select" isOpen startIcon={<>icon</>}>
				<SelectItem key="ardvark">Ardvark</SelectItem>
				<SelectItem key="kangaroo">Kangaroo</SelectItem>
				<SelectItem key="snake">Snake</SelectItem>
				<SelectSection title="Section">
					<SelectItem key="dog">Dog</SelectItem>
				</SelectSection>
			</MultiSelect>,
		);

		it('should render correctly', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const select = screen.getByRole('textbox', { hidden: true });

			expect(select).not.toBeDisabled();

			const trigger = screen.getByRole('button');

			expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			expect(listbox).toBeVisible();

			expect(items).toHaveLength(3);
		});
	});

	describe('open', () => {
		it('should open via mouse down', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');

			expect(listbox).toBeVisible();
		});

		it('should open via Space key down', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.keyDown(trigger, { key: ' ' });

			const listbox = screen.getByRole('listbox');

			expect(listbox).toBeVisible();
		});

		it('should open via Enter key down', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.keyDown(trigger, { key: 'Enter' });

			const listbox = screen.getByRole('listbox');

			expect(listbox).toBeVisible();
		});

		it('should open via ArrowDown key down', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.keyDown(trigger, { key: 'ArrowDown' });

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			expect(document.activeElement).toBe(items[0]);
		});

		it('should open via ArrowUp key down', () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.keyDown(trigger, { key: 'ArrowUp' });

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			expect(document.activeElement).toBe(items[2]);
		});
	});

	describe('close', () => {
		it('should close when clicked outside', async () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');

			expect(trigger).toHaveAttribute('aria-expanded', 'true');
			expect(trigger).toHaveAttribute('aria-controls', listbox.id);

			await userEvent.click(document.body);

			await waitFor(() => {
				expect(listbox).not.toBeInTheDocument();
			});

			expect(trigger).toHaveAttribute('aria-expanded', 'false');
			expect(trigger).not.toHaveAttribute('aria-controls');
		});

		it('should close on Escape key down', async () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');

			expect(trigger).toHaveAttribute('aria-expanded', 'true');
			expect(trigger).toHaveAttribute('aria-controls', listbox.id);

			fireEvent.keyDown(listbox, { key: 'Escape' });

			await waitFor(() => {
				expect(listbox).not.toBeInTheDocument();
			});

			expect(trigger).toHaveAttribute('aria-expanded', 'false');
			expect(trigger).not.toHaveAttribute('aria-controls');
		});
	});

	describe('selection', () => {
		it('should support item selection via mouse down', () => {
			const onSelectionChange = jest.fn();

			render(
				<MultiSelect disabledKeys={['snake']} label="Select" onSelectionChange={onSelectionChange}>
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			fireEvent.click(items[1]);

			expect(onSelectionChange).toHaveBeenCalled();

			fireEvent.click(items[2]);

			expect(onSelectionChange).toHaveBeenCalledTimes(2);
		});

		it('should support item selection via Space key down', () => {
			const onSelectionChange = jest.fn();

			render(
				<MultiSelect label="Select" onSelectionChange={onSelectionChange}>
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			fireEvent.keyDown(listbox, { key: 'ArrowDown' });
			fireEvent.keyUp(listbox, { key: 'ArrowDown' });

			expect(document.activeElement).toBe(items[1]);

			fireEvent.keyDown(items[2], { key: ' ' });

			expect(onSelectionChange).toHaveBeenCalled();
		});

		it('should support item selection via Enter key down', () => {
			const onSelectionChange = jest.fn();

			render(
				<MultiSelect label="Select" onSelectionChange={onSelectionChange}>
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			fireEvent.keyDown(listbox, { key: 'ArrowDown' });
			fireEvent.keyUp(listbox, { key: 'ArrowDown' });

			expect(document.activeElement).toBe(items[1]);

			fireEvent.keyDown(items[2], { key: 'Enter' });

			expect(onSelectionChange).toHaveBeenCalled();
		});

		it('should support type to select', () => {
			const onSelectionChange = jest.fn();

			render(
				<MultiSelect label="Select" onSelectionChange={onSelectionChange}>
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			act(() => {
				trigger.focus();
			});

			fireEvent.keyDown(trigger, { key: 'ArrowDown' });

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			expect(document.activeElement).toBe(items[0]);

			fireEvent.keyDown(listbox, { key: 'k' });
			fireEvent.keyUp(listbox, { key: 'k' });

			expect(document.activeElement).toBe(items[1]);
		});
	});

	describe('label', () => {
		it('should support a label', () => {
			render(
				<MultiSelect label="Select" placeholder="Select an option...">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const label = screen.getAllByText('Select')[0];
			const trigger = screen.getByRole('button');
			const input = screen.getByText('Select an option...');

			expect(label).toHaveAttribute('id');
			expect(input).toHaveAttribute('id');
			expect(trigger).toHaveAttribute('aria-labelledby', `${label.id} ${input.id}`);
		});

		it('should support an aria-label', () => {
			render(
				<MultiSelect aria-label="Select" placeholder="Select an option...">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');
			const input = screen.getByText('Select an option...');

			expect(trigger).toHaveAttribute('id');
			expect(input).toHaveAttribute('id');
			expect(trigger).toHaveAttribute('aria-label', 'Select');
			expect(trigger).toHaveAttribute('aria-labelledby', `${trigger.id} ${input.id}`);
		});

		it('should support being aria-labelledby', () => {
			render(
				<MultiSelect aria-labelledby="select" placeholder="Select an option...">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');
			const input = screen.getByText('Select an option...');

			expect(trigger).toHaveAttribute('id');
			expect(input).toHaveAttribute('id');
			expect(trigger).toHaveAttribute('aria-labelledby', `select ${input.id}`);

			fireEvent.click(trigger);

			const listbox = screen.getByRole('listbox');

			expect(listbox).toHaveAttribute('aria-labelledby', 'select');
		});

		it('should focus the trigger element on label click', () => {
			render(
				<MultiSelect label="Select" placeholder="Select an option...">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const label = screen.getAllByText('Select')[0];
			const trigger = screen.getByRole('button');

			fireEvent.click(label);

			expect(document.activeElement).toBe(trigger);
		});
	});

	describe('focus', () => {
		it('should support autoFocus', () => {
			const onBlur = jest.fn();
			const onFocus = jest.fn();
			const onFocusChange = jest.fn();

			const focusProps = {
				autoFocus: true,
				onBlur,
				onFocus,
				onFocusChange,
			};

			render(
				<MultiSelect label="Select" {...focusProps}>
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			expect(document.activeElement).toBe(trigger);
			expect(onFocus).toHaveBeenCalled();
			expect(onFocusChange).toHaveBeenCalledWith(true);
		});

		it('should focus item on hover', async () => {
			render(
				<MultiSelect label="Select">
					<SelectItem key="ardvark">Ardvark</SelectItem>
					<SelectItem key="kangaroo">Kangaroo</SelectItem>
					<SelectItem key="snake">Snake</SelectItem>
				</MultiSelect>,
			);

			const trigger = screen.getByRole('button');

			await userEvent.click(trigger);

			const listbox = screen.getByRole('listbox');
			const items = within(listbox).getAllByRole('option');

			expect(document.activeElement).toBe(listbox);

			fireEvent.mouseEnter(items[0]);

			expect(document.activeElement).toBe(items[0]);

			fireEvent.keyDown(listbox, { key: 'ArrowDown' });
			fireEvent.keyUp(listbox, { key: 'ArrowDown' });

			expect(document.activeElement).toBe(items[1]);
		});
	});
});
