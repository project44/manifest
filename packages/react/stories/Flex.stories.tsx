import { Box, Flex } from '../src/components/Layout';

export default {
  title: 'Components/Flex',
  component: Flex,
};

export function Default() {
  return (
    <Flex>
      <Box css={{ backgroundColor: '$background-primary', height: 300, width: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', width: 100 }} />
      <Box css={{ backgroundColor: '$background-tertiary', flex: 1 }} />
    </Flex>
  );
}

export function Align() {
  return (
    <Flex align="center" css={{ height: 200 }} gap="small">
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
    </Flex>
  );
}

export function Justify() {
  return (
    <Flex gap="small" justify="end">
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
    </Flex>
  );
}

export function Gap() {
  return (
    <Flex gap="large">
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
    </Flex>
  );
}

export function Orientation() {
  return (
    <Flex gap="small" orientation="vertical">
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
    </Flex>
  );
}

export function Wrap() {
  return (
    <Flex wrap gap="small">
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
      <Box css={{ backgroundColor: '$background-secondary', size: 100 }} />
    </Flex>
  );
}
