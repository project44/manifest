import { Carrier } from '@project44-manifest/react-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import { Menu, MenuGroup, MenuItem } from '../src';

describe('react-menu', () => {
  it('should render', () => {
    render(
      <Menu>
        <MenuItem label="Item" />
        <MenuItem
          endIcon={<Carrier aria-label="end-icon" />}
          label="Item Icons"
          startIcon={<Carrier aria-label="start-icon" />}
        />
      </Menu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Item Icons')).toBeInTheDocument();
    expect(screen.getByLabelText('end-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('start-icon')).toBeInTheDocument();
  });

  it('should render a menu group', () => {
    render(
      <Menu>
        <MenuItem label="Item" />
        <MenuGroup label="Group">
          <MenuItem label="Group Item" />
        </MenuGroup>
      </Menu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Group')).toBeInTheDocument();
    expect(screen.getByLabelText('expand')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Group'));

    expect(screen.getByText('Group Item')).toBeInTheDocument();
    expect(screen.getByLabelText('collapse')).toBeInTheDocument();
  });

  it('should support a controlled menu group', () => {
    const onExpandedChange = jest.fn();

    render(
      <Menu>
        <MenuItem label="Item" />
        <MenuGroup isExpanded label="Group" onExpandedChange={onExpandedChange}>
          <MenuItem label="Group Item" />
        </MenuGroup>
      </Menu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Group')).toBeInTheDocument();
    expect(screen.getByText('Group Item')).toBeInTheDocument();
    expect(screen.getByLabelText('collapse')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Group'));

    expect(onExpandedChange).toHaveBeenCalled();
  });

  it('should support a default expanded menu group', () => {
    const onExpandedChange = jest.fn();

    render(
      <Menu>
        <MenuItem label="Item" />
        <MenuGroup defaultExpanded label="Group" onExpandedChange={onExpandedChange}>
          <MenuItem label="Group Item" />
        </MenuGroup>
      </Menu>,
    );

    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Group')).toBeInTheDocument();
    expect(screen.getByText('Group Item')).toBeInTheDocument();
    expect(screen.getByLabelText('collapse')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Group'));

    expect(onExpandedChange).toHaveBeenCalled();
  });
});
