import { accessibility, render, screen, userEvent } from '@project44-manifest/test-utils';
import { Radio, RadioGroup } from '../src';

describe('@project44-manifest/react - Radio', () => {
	accessibility(
		<RadioGroup>
			<Radio value="cats">Cats</Radio>
			<Radio value="dogs">Dogs</Radio>
		</RadioGroup>,
	);

	it('should render and support selection', async () => {
		const onChange = jest.fn();

		render(
			<RadioGroup onChange={onChange}>
				<Radio value="cats">Cats</Radio>
				<Radio value="dogs">Dogs</Radio>
			</RadioGroup>,
		);

		const radioGroup = screen.getByRole('radiogroup');
		const radios: HTMLInputElement[] = screen.getAllByRole('radio');

		expect(radioGroup).toBeVisible();
		expect(radios).toHaveLength(2);

		expect(radios[0].checked).toBe(false);
		expect(radios[1].checked).toBe(false);

		await userEvent.click(screen.getByLabelText('Cats'));

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('cats');

		expect(radios[0].checked).toBe(true);
		expect(radios[1].checked).toBe(false);
	});

	it('should support being controlled', async () => {
		const onChange = jest.fn();

		render(
			<RadioGroup value="dogs" onChange={onChange}>
				<Radio value="cats">Cats</Radio>
				<Radio value="dogs">Dogs</Radio>
			</RadioGroup>,
		);

		const radioGroup = screen.getByRole('radiogroup');
		const radios: HTMLInputElement[] = screen.getAllByRole('radio');

		expect(radioGroup).toBeVisible();
		expect(radios).toHaveLength(2);

		expect(radios[0].checked).toBe(false);
		expect(radios[1].checked).toBe(true);

		await userEvent.click(screen.getByLabelText('Cats'));

		expect(onChange).toHaveBeenCalled();
		expect(onChange).toHaveBeenCalledWith('cats');

		expect(radios[0].checked).toBe(false);
		expect(radios[1].checked).toBe(true);
	});

	it('should support a default value', async () => {
		const onChange = jest.fn();

		render(
			<RadioGroup defaultValue="dogs" onChange={onChange}>
				<Radio value="cats">Cats</Radio>
				<Radio value="dogs">Dogs</Radio>
			</RadioGroup>,
		);

		const radioGroup = screen.getByRole('radiogroup');
		const radios: HTMLInputElement[] = screen.getAllByRole('radio');

		expect(radioGroup).toBeVisible();
		expect(radios).toHaveLength(2);

		expect(radios[0].checked).toBe(false);
		expect(radios[1].checked).toBe(true);

		await userEvent.click(screen.getByLabelText('Cats'));

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('cats');

		expect(radios[0].checked).toBe(true);
		expect(radios[1].checked).toBe(false);
	});

	it('should support being disabled', () => {
		const onChange = jest.fn();

		render(
			<RadioGroup isDisabled onChange={onChange}>
				<Radio value="cats">Cats</Radio>
				<Radio value="dogs">Dogs</Radio>
			</RadioGroup>,
		);

		const radioGroup = screen.getByRole('radiogroup');
		const radios: HTMLInputElement[] = screen.getAllByRole('radio');

		expect(radioGroup).toBeVisible();
		expect(radios).toHaveLength(2);

		expect(radios[0]).toHaveAttribute('disabled');
		expect(radios[1]).toHaveAttribute('disabled');
	});

	it('should support disabled radios', async () => {
		const onChange = jest.fn();

		render(
			<RadioGroup onChange={onChange}>
				<Radio value="cats">Cats</Radio>
				<Radio isDisabled value="dogs">
					Dogs
				</Radio>
			</RadioGroup>,
		);

		const radioGroup = screen.getByRole('radiogroup');
		const radios: HTMLInputElement[] = screen.getAllByRole('radio');

		expect(radioGroup).toBeVisible();
		expect(radios).toHaveLength(2);

		expect(radios[0]).not.toHaveAttribute('disabled');
		expect(radios[1]).toHaveAttribute('disabled');

		await userEvent.click(screen.getByLabelText('Dogs'));

		expect(onChange).not.toHaveBeenCalled();

		expect(radios[0].checked).toBe(false);
		expect(radios[1].checked).toBe(false);

		await userEvent.click(screen.getByLabelText('Cats'));

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('cats');

		expect(radios[0].checked).toBe(true);
		expect(radios[1].checked).toBe(false);
	});
});
