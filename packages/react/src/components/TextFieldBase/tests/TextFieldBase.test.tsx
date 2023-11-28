import { fireEvent, render, screen } from '@testing-library/react';
import { Button, Icon, IconButton } from '../../..';

import { TextFieldBase } from '..';

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

  it('end icon should be clickable', () => {
    const onClick = jest.fn();
    render(
      <TextFieldBase
        endIcon={
          <IconButton size="small">
            <Icon data-testid="end-icon" icon="search" onClick={onClick} />
          </IconButton>
        }
      />,
    );

    fireEvent.click(screen.getByTestId('end-icon'));

    expect(onClick).toHaveBeenCalled();
  });

  it('start icon should be clickable', () => {
    const onClick = jest.fn();
    render(
      <TextFieldBase
        startIcon={
          <IconButton size="small">
            <Icon data-testid="start-icon" icon="search" onClick={onClick} />
          </IconButton>
        }
      />,
    );

    fireEvent.click(screen.getByTestId('start-icon'));

    expect(onClick).toHaveBeenCalled();
  });

  it('start icon should not be clickable', () => {
    const onClick = jest.fn();
    render(
      <TextFieldBase
        startIcon={
          <Button isDisabled data-testid="start-icon" onPress={onClick}>
            <span>start icon</span>
          </Button>
        }
      />,
    );

    fireEvent.click(screen.getByTestId('start-icon'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
