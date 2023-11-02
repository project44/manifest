import { render, screen } from '@testing-library/react';
import { TextFieldBase } from '../src/components/TextFieldBase';

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

  it('pointer event should be allowed', () => {
    render(
      <TextFieldBase
        endIconClickable
        endIcon={<span>end icon</span>}
        startIcon={<span>start icon</span>}
      />,
    );

    expect(screen.getByText('end icon')).toBeInTheDocument();
    expect(screen.getByText('start icon')).toBeInTheDocument();

    expect(
      screen
        .getByTestId('end-icon')
        .classList.contains('manifest-textfield-base__icon_allow_pointer_events'),
    ).toBeTruthy();
  });

  it('pointer event should be stopped', () => {
    render(<TextFieldBase endIcon={<span>end icon</span>} startIcon={<span>start icon</span>} />);

    expect(screen.getByText('end icon')).toBeInTheDocument();
    expect(screen.getByText('start icon')).toBeInTheDocument();

    expect(
      screen
        .getByTestId('end-icon')
        .classList.contains('manifest-textfield-base__icon_allow_pointer_events'),
    ).toBeFalsy();
  });
});
