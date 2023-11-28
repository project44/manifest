import { fireEvent, render, screen } from '@testing-library/react';
import {
  DropdownItem,
  DropdownMenu,
  LocalNavigation,
  LocalNavigationDropdownItem,
  LocalNavigationItem,
} from '../../..';

describe('react: LocalNavigation', () => {
  it('should render', () => {
    render(
      <LocalNavigation>
        <LocalNavigationItem>Overview</LocalNavigationItem>
        <LocalNavigationItem>Lanes</LocalNavigationItem>
        <LocalNavigationItem>Carriers</LocalNavigationItem>
        <LocalNavigationItem>Containers</LocalNavigationItem>
      </LocalNavigation>,
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(4);

    for (const button of buttons) {
      expect(button).toHaveAttribute('type', 'button');
    }
  });

  it('should handle press events', () => {
    const onPress = jest.fn();

    render(
      <LocalNavigation>
        <LocalNavigationItem onPress={onPress}>Overview</LocalNavigationItem>
        <LocalNavigationItem>Lanes</LocalNavigationItem>
        <LocalNavigationItem>Carriers</LocalNavigationItem>
        <LocalNavigationItem>Containers</LocalNavigationItem>
      </LocalNavigation>,
    );

    const button = screen.getAllByRole('button');

    fireEvent.click(button[0]);

    expect(onPress).toHaveBeenCalled();
  });

  it('should render dropdown item and dropdown options after click', () => {
    const onOpenChange = jest.fn();

    render(
      <LocalNavigation>
        <LocalNavigationDropdownItem title="Parent section" onOpenChange={onOpenChange}>
          <DropdownMenu>
            <DropdownItem key="Profile">Profile</DropdownItem>
            <DropdownItem key="Search">Search</DropdownItem>
          </DropdownMenu>
        </LocalNavigationDropdownItem>
        <LocalNavigationItem>Overview</LocalNavigationItem>
      </LocalNavigation>,
    );

    const button = screen.getAllByRole('button');

    fireEvent.click(button[0]);

    const dropdownOption = screen.getByRole('menuitem', { name: 'Profile' });

    expect(onOpenChange).toHaveBeenCalled();
    expect(dropdownOption).toBeVisible();
  });
});
