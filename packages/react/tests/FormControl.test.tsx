import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { FormControl, FormControlProps } from '../src';
import { axe } from 'jest-axe';
import { useField } from '@react-aria/label';

const TestComponent = React.forwardRef(
	(props: FormControlProps, ref: React.Ref<HTMLDivElement>) => {
		const { validationState } = props;
		const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(props);

		return (
			<FormControl
				{...props}
				labelProps={labelProps}
				helperTextProps={validationState === 'invalid' ? errorMessageProps : descriptionProps}
				ref={ref}
			>
				<input {...fieldProps} />
			</FormControl>
		);
	},
);

describe('@project44-manifest/components - FormControl', () => {
	it('should have no accessibility violations', async () => {
		const { container } = render(<TestComponent label="Label" />);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});

	it('should render with label and helper text', () => {
		render(<TestComponent label="Label" helperText="Helper text" />);

		const label = screen.getByLabelText('Label');
		const helpText = screen.getByText('Helper text');

		expect(label).toBeInTheDocument();
		expect(helpText).toBeInTheDocument();

		expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', helpText.id);
	});

	it('should render with invalid state', () => {
		render(<TestComponent label="Label" helperText="Helper text" validationState="invalid" />);

		const label = screen.getByLabelText('Label');
		const helpText = screen.getByText('Helper text');

		expect(label).toBeInTheDocument();
		expect(helpText).toBeInTheDocument();

		expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', helpText.id);
	});

	it('should render optional', () => {
		render(<TestComponent label="Label" helperText="Helper text" isRequired={false} />);

		expect(screen.getByText('(optional)')).toBeInTheDocument();
	});
});
