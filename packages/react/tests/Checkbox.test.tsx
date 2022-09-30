import { accessibility, render, screen, userEvent } from '@project44-manifest/test-utils';
import { Checkbox } from '../src';

describe('@project44-manifest/react - Checkbox', () => {
	accessibility(<Checkbox>Checkbox</Checkbox>);

	it('should render and support being checked', async () => {
		const onChange = jest.fn();

		render(<Checkbox onChange={onChange}>Checkbox</Checkbox>);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox).toBeVisible();
		expect(checkbox.checked).toBeFalsy();
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		await userEvent.click(checkbox);

		expect(checkbox).toHaveAttribute('aria-checked', 'true');
		expect(checkbox.checked).toBeTruthy();
		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[0][0]).toBe(true);

		await userEvent.click(checkbox);

		expect(checkbox).toHaveAttribute('aria-checked', 'false');
		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[1][0]).toBe(false);
	});

	it('should support being controlled', async () => {
		const onChange = jest.fn();

		render(
			<Checkbox isSelected onChange={onChange}>
				Checkbox
			</Checkbox>,
		);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox.checked).toBeTruthy();

		await userEvent.click(checkbox);

		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[0][0]).toBe(false);
	});

	it('should support being checked by deafult', async () => {
		const onChange = jest.fn();

		render(
			<Checkbox defaultSelected onChange={onChange}>
				Checkbox
			</Checkbox>,
		);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox.checked).toBeTruthy();

		await userEvent.click(checkbox);

		expect(checkbox.checked).toBeFalsy();
		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[0][0]).toBe(false);
	});

	it('should support being disabled', async () => {
		const onChange = jest.fn();

		render(
			<Checkbox isDisabled onChange={onChange}>
				Checkbox
			</Checkbox>,
		);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox.checked).toBeFalsy();

		await userEvent.click(checkbox);

		expect(checkbox.checked).toBeFalsy();
		expect(onChange).not.toHaveBeenCalled();
	});

	it('should support being invalid', () => {
		render(<Checkbox validationState="invalid">Checkbox</Checkbox>);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox).toHaveAttribute('aria-invalid', 'true');
	});

	it('should support being indeterminate', async () => {
		const onChange = jest.fn();

		render(
			<Checkbox isIndeterminate onChange={onChange}>
				Checkbox
			</Checkbox>,
		);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');

		expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
		expect(checkbox.indeterminate).toBeTruthy();
		expect(checkbox.checked).toBeFalsy();

		await userEvent.click(checkbox);

		expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
		expect(checkbox.indeterminate).toBeTruthy();
		expect(checkbox.checked).toBeTruthy();
		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[0][0]).toBe(true);

		await userEvent.click(checkbox);

		expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
		expect(checkbox.indeterminate).toBeTruthy();
		expect(checkbox.checked).toBeFalsy();
		expect(onChange).toHaveBeenCalled();
		expect(onChange.mock.calls[1][0]).toBe(false);
	});
});
