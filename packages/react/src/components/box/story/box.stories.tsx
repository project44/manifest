import { Box, BoxProps } from '../../..';

export default {
  title: 'Components/Box',
  component: Box,
};

export function Default(args: BoxProps) {
  return <Box {...args} />;
}

Default.args = {
  css: { backgroundColor: '$palette-blue-500', size: 200 },
};

export function AsProp(args: BoxProps) {
  return <Box {...args}>Box</Box>;
}

AsProp.args = {
  as: 'span',
  css: {
    border: '1px solid $border-primary',
    borderRadius: '$full',
    px: '$medium',
    py: '$small',
  },
};
