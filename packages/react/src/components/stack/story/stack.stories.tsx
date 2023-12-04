import { Box, Stack, StackProps } from '../../..';

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    gap: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-large', 'x-small'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};

export const Default = (args: StackProps) => {
  return (
    <Stack {...args}>
      <Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
      <Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
      <Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
      <Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
      <Box css={{ backgroundColor: '$background-secondary', size: '80px' }} />
    </Stack>
  );
};

Default.args = {
  gap: 'x-large',
  orientation: 'horizontal',
};
