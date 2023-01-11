import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { TextFieldBase } from '../src/components/TextFieldBase';

describe('@project44-manifest/components - TextFieldBase', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<TextFieldBase inputProps={{ 'aria-label': 'text field' }} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

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
