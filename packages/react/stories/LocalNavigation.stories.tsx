import { LocalNavigation, LocalNavigationItem } from '../src';

export default {
  title: 'Components/LocalNavigation',
  component: LocalNavigation,
  subComponents: { LocalNavigationItem },
};

export const Default = () => (
  <LocalNavigation>
    <LocalNavigationItem>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);

export const Selected = () => (
  <LocalNavigation>
    <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);
