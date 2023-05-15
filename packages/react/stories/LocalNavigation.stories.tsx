import { Flex, LocalNavigation, LocalNavigationItem } from '../src';

export default {
  title: 'Components/LocalNavigation',
  component: LocalNavigation,
  subComponents: { LocalNavigationItem },
};

export const Default = () => (
  <Flex
    align="center"
    css={{ backgroundColor: '$background-top-nav', height: '56px', px: '$large' }}
  >
    <LocalNavigation>
      <LocalNavigationItem>Overview</LocalNavigationItem>
      <LocalNavigationItem>Lanes</LocalNavigationItem>
      <LocalNavigationItem>Carriers</LocalNavigationItem>
      <LocalNavigationItem>Containers</LocalNavigationItem>
    </LocalNavigation>
  </Flex>
);

export const Selected = () => (
  <Flex
    align="center"
    css={{ backgroundColor: '$background-top-nav', height: '56px', px: '$large' }}
  >
    <LocalNavigation>
      <LocalNavigationItem isSelected>Overview</LocalNavigationItem>
      <LocalNavigationItem>Lanes</LocalNavigationItem>
      <LocalNavigationItem>Carriers</LocalNavigationItem>
      <LocalNavigationItem>Containers</LocalNavigationItem>
    </LocalNavigation>
  </Flex>
);
