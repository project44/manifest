import { OverlayProvider } from '@react-aria/overlays';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from '../src';

describe('@project44-manifest/react - Popover', () => {
  it('should render and support close events', async () => {
    const onClose = jest.fn();

    render(
      <OverlayProvider>
        <Popover isOpen onClose={onClose}>
          <span data-testid="popover">Popover</span>
        </Popover>
      </OverlayProvider>,
    );

    const popover = screen.getByText('Popover');

    expect(popover).toBeVisible();

    fireEvent.keyDown(popover, { key: 'Escape' });
    fireEvent.keyUp(popover, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);

    await userEvent.click(document.body);

    expect(onClose).toHaveBeenCalledTimes(2);
  });

  it('should support blur on close', () => {
    const onClose = jest.fn();

    const buttonProps = {
      autoFocus: true,
    };

    render(
      <OverlayProvider>
        <Popover isOpen shouldCloseOnBlur onClose={onClose}>
          <span data-testid="popover">Popover</span>
          <button {...buttonProps}>click me</button>
        </Popover>
      </OverlayProvider>,
    );

    const button = screen.getAllByRole('button')[1];
    const popover = screen.getByText('Popover');

    expect(popover).toBeVisible();

    expect(document.activeElement).toBe(button);

    act(() => {
      button.blur();
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
