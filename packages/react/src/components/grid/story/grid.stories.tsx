import { Grid, GridItem, GridProps } from '../../..';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    gap: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-large', 'x-small'],
    },
    rowGap: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-large', 'x-small'],
    },
    colGap: {
      control: 'select',
      options: ['large', 'medium', 'small', 'x-large', 'x-small'],
    },
  },
};

export const Default = (args: GridProps) => (
  <Grid {...args}>
    <GridItem css={{ backgroundColor: '$background-secondary' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
  </Grid>
);

Default.args = {
  gap: 'small',
  columns: 'repeat(5, 1fr)',
  css: { width: '100%' },
};

export const Rows = (args: GridProps) => (
  <Grid {...args}>
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
  </Grid>
);

Rows.args = {
  css: { width: '100%' },
  gap: 'small',
  rows: 'repeat(5, 1fr)',
};

export const Spanning = (args: GridProps) => (
  <Grid {...args}>
    <GridItem column={1} css={{ backgroundColor: '$background-secondary' }} row={2} />
    <GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
    <GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
    <GridItem column={4} css={{ backgroundColor: '$background-secondary' }} />
  </Grid>
);

Spanning.args = {
  columns: 'repeat(5, 1fr)',
  css: { height: '200px', width: '100%' },
  gap: 'small',
  rows: 'repeat(2, 1fr)',
};

export const Position = (args: GridProps) => (
  <Grid {...args}>
    <GridItem
      column={2}
      css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
    />
    <GridItem
      columnEnd={6}
      columnStart={4}
      css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }}
    />
  </Grid>
);

Position.args = {
  columns: 'repeat(5, 1fr)',
  css: { width: '100%' },
  gap: 'small',
};
