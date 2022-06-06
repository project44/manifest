import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Dropdown } from './Dropdown';
import { DropdownItem } from './DropdownItem';
import { DropdownMenu } from './DropdownMenu';
import { DropdownTrigger } from './DropdownTrigger';
import userEvent from '@testing-library/user-event';

function ControlledDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
      <DropdownTrigger>
        <button>Open</button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

describe('@manifest-ui/dropdown', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <Dropdown isOpen>
        <DropdownTrigger>
          <button>Open</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', async () => {
    const handleSelect = jest.fn();

    const container = render(
      <Dropdown>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={handleSelect}>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem>Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>,
    );

    expect(container.queryByRole('menu')).toBeNull();

    await userEvent.type(container.getByRole('button'), '{arrowdown}');

    await waitFor(() => {
      expect(container.getByRole('menu')).toBeDefined();
    });

    fireEvent.click(container.getByText('Option 1'));

    expect(handleSelect).toHaveBeenCalled();
  });

  it('should support controlled state', async () => {
    const container = render(<ControlledDropdown />);

    expect(container.queryByRole('menu')).toBeNull();

    await userEvent.type(container.getByRole('button'), '{arrowdown}');

    expect(container.getByRole('menu')).toBeDefined();
  });
});
