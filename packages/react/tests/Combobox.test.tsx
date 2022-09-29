import { act, fireEvent, screen, render, within } from '@testing-library/react';
import { Combobox, ComboboxItem, ComboboxSection, Provider } from '../src';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/react - Combobox', () => {
	it('should render', () => {
		render(
			<Provider>
				<Combobox label="Combobox" startIcon={<>icon</>}>
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
					<ComboboxSection title="Section">
						<ComboboxItem key="dog">Dog</ComboboxItem>
					</ComboboxSection>
				</Combobox>
			</Provider>,
		);

		const combobox = screen.getByRole('combobox');

		expect(combobox).toBeVisible();

		act(() => {
			combobox.focus();
			fireEvent.change(combobox, { target: { value: 'Kan' } });
		});

		const listbox = screen.getByRole('listbox');
		const items = within(listbox).getAllByRole('option');

		expect(listbox).toBeVisible();
		expect(items).toHaveLength(1);
		expect(combobox).not.toHaveAttribute('aria-activedescendant');
		expect(items[0].textContent).toBe('Kangaroo');
	});

	it('should close menu when no items match', () => {
		render(
			<Provider>
				<Combobox label="Combobox">
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
				</Combobox>
			</Provider>,
		);

		const combobox = screen.getByRole('combobox');

		expect(combobox).toBeVisible();

		act(() => {
			combobox.focus();
			fireEvent.change(combobox, { target: { value: 'Bear' } });
		});

		expect(screen.queryByRole('listbox')).toBeNull();
	});

	it('should open the listbox when opened by the button', async () => {
		render(
			<Provider>
				<Combobox label="Combobox">
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
				</Combobox>
			</Provider>,
		);

		const button = screen.getByRole('button');

		await userEvent.click(button);

		const listbox = screen.getByRole('listbox');
		const items = within(listbox).getAllByRole('option');

		expect(listbox).toBeVisible();
		expect(items).toHaveLength(3);
	});

	it('should support item selection', async () => {
		const onSelectionChange = jest.fn();

		render(
			<Provider>
				<Combobox label="Combobox" onSelectionChange={onSelectionChange}>
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
				</Combobox>
			</Provider>,
		);

		const button = screen.getByRole('button');

		await userEvent.click(button);

		const listbox = screen.getByRole('listbox');
		const items = within(listbox).getAllByRole('option');

		expect(listbox).toBeVisible();
		expect(items).toHaveLength(3);

		await userEvent.click(items[0]);

		expect(onSelectionChange).toHaveBeenCalled();
		expect(onSelectionChange).toHaveBeenCalledWith('ardvark');
	});

	it('should open the listbox when opened by the keyboard', () => {
		render(
			<Provider>
				<Combobox label="Combobox">
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
				</Combobox>
			</Provider>,
		);

		fireEvent.keyDown(screen.getByRole('combobox'), { key: 'ArrowDown', code: 38, charCode: 38 });

		const listbox = screen.getByRole('listbox');
		const items = within(listbox).getAllByRole('option');

		expect(listbox).toBeVisible();
		expect(items).toHaveLength(3);
	});

	it('should support being controlled', () => {
		const onInputChange = jest.fn();
		const onOpenChange = jest.fn();

		render(
			<Provider>
				<Combobox label="Combobox" onInputChange={onInputChange} onOpenChange={onOpenChange}>
					<ComboboxItem key="ardvark">Ardvark</ComboboxItem>
					<ComboboxItem key="kangaroo">Kangaroo</ComboboxItem>
					<ComboboxItem key="snake">Snake</ComboboxItem>
				</Combobox>
			</Provider>,
		);

		const combobox = screen.getByRole('combobox');

		expect(combobox).toBeVisible();

		act(() => {
			combobox.focus();
			fireEvent.change(combobox, { target: { value: 'Kan' } });
		});

		expect(onInputChange).toHaveBeenCalled();
		expect(onOpenChange).toHaveBeenCalled();
	});
});
