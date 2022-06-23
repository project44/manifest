import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('@manifest/react- Button', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render a button', () => {
    const container = render(<Button>Click Me</Button>);

    const button = container.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('should handle disabled', () => {
    const clickSpy = jest.fn();

    const container = render(
      <Button disabled onClick={clickSpy}>
        Click Me
      </Button>,
    );

    const button = container.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveAttribute('tabIndex', '-1');
    expect(clickSpy).not.toHaveBeenCalled();
  });
});
