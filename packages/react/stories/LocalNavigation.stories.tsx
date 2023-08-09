import { LocalNavigation, LocalNavigationItem, Stack, Typography } from '../src';

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

export const Variant = () => (
  <Stack gap="large">
    <Typography variant="subtextBold">Primary</Typography>
    <LocalNavigation>
      <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
      <LocalNavigationItem>Lanes</LocalNavigationItem>
      <LocalNavigationItem>Carriers</LocalNavigationItem>
      <LocalNavigationItem>Containers</LocalNavigationItem>
    </LocalNavigation>
    <Typography variant="subtextBold">Secondary</Typography>
    <LocalNavigation variant="secondary">
      <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
      <LocalNavigationItem>Lanes</LocalNavigationItem>
      <LocalNavigationItem>Carriers</LocalNavigationItem>
      <LocalNavigationItem>Containers</LocalNavigationItem>
    </LocalNavigation>
  </Stack>
);

export const Selected = () => (
  <LocalNavigation>
    <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
    <LocalNavigationItem>Lanes</LocalNavigationItem>
    <LocalNavigationItem>Carriers</LocalNavigationItem>
    <LocalNavigationItem>Containers</LocalNavigationItem>
  </LocalNavigation>
);
