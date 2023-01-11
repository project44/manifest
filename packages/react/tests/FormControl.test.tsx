import * as React from 'react';
import { useField } from '@react-aria/label';
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { FormControl, FormControlProps } from '../src';

const TestComponent = React.forwardRef(
  (props: FormControlProps, ref: React.Ref<HTMLDivElement>) => {
    const { validationState } = props;
    const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useField(props);

    return (
      <FormControl
        {...props}
        ref={ref}
        helperTextProps={validationState === 'invalid' ? errorMessageProps : descriptionProps}
        labelProps={labelProps}
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
    render(<TestComponent helperText="Helper text" label="Label" />);

    const label = screen.getByLabelText('Label');
    const helpText = screen.getByText('Helper text');

    expect(label).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', helpText.id);
  });

  it('should render with invalid state', () => {
    render(<TestComponent helperText="Helper text" label="Label" validationState="invalid" />);

    const label = screen.getByLabelText('Label');
    const helpText = screen.getByText('Helper text');

    expect(label).toBeInTheDocument();
    expect(helpText).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', helpText.id);
  });

  it('should render optional', () => {
    render(<TestComponent helperText="Helper text" isRequired={false} label="Label" />);

    expect(screen.getByText('(optional)')).toBeInTheDocument();
  });
});
