import { render, screen } from '@testing-library/react';
import { NumberFieldBase } from '../src/components/NumberFieldBase';

describe('@project44-manifest/components - NumberFieldBase', () => {
  it('should render', () => {
    render(<NumberFieldBase endIcon={<span>end icon</span>} startIcon={<span>start icon</span>} />);

    expect(screen.getByText('end icon')).toBeInTheDocument();
    expect(screen.getByText('start icon')).toBeInTheDocument();
  });

  // it('should support multiline fields', () => {
  //   render(<NumberFieldBase multiline />);

  //   expect(screen.getByRole('textbox')).toHaveAttribute('rows');
  // });
});
