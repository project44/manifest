import { fireEvent, render, screen } from '@testing-library/react';
import { LocalNavigation, LocalNavigationItem } from '../src';

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

  it('should handle click events', () => {
    const onClick = jest.fn();

    render(
      <LocalNavigation>
        <LocalNavigationItem onClick={onClick}>Overview</LocalNavigationItem>
        <LocalNavigationItem>Lanes</LocalNavigationItem>
        <LocalNavigationItem>Carriers</LocalNavigationItem>
        <LocalNavigationItem>Containers</LocalNavigationItem>
      </LocalNavigation>,
    );

    const button = screen.getAllByRole('button');

    fireEvent.click(button[0]);

    expect(onClick).toHaveBeenCalled();
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
});
