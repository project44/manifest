import { render, screen } from '@testing-library/react';
import { TextFieldBase } from '../src';

describe('@project44-manifest/components - TextFieldBase', () => {
  it('should render', () => {
    render(<TextFieldBase endIcon={<span>end icon</span>} startIcon={<span>start icon</span>} />);

    expect(screen.getByText('end icon')).toBeInTheDocument();
    expect(screen.getByText('start icon')).toBeInTheDocument();
  });

  it('should support multiline fields', () => {
    render(<TextFieldBase multiline />);

    expect(screen.getByRole('textbox')).toHaveAttribute('rows');
  });
});
