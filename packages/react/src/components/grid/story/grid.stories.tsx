import { Grid, GridItem } from '../../..';

export default {
  title: 'Components/Grid',
  component: Grid,
};

export function Default() {
  return (
    <Grid columns="repeat(5, 1fr)" css={{ width: '100%' }} gap="small">
      <GridItem css={{ backgroundColor: '$background-secondary' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    </Grid>
  );
}

export function Rows() {
  return (
    <Grid css={{ width: '100%' }} gap="small" rows="repeat(5, 1fr)">
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
      <GridItem css={{ backgroundColor: '$background-secondary', height: '80px', width: '100%' }} />
    </Grid>
  );
}

export function Spanning() {
  return (
    <Grid
      columns="repeat(5, 1fr)"
      css={{ height: '200px', width: '100%' }}
      gap="small"
      rows="repeat(2, 1fr)"
    >
      <GridItem column={1} css={{ backgroundColor: '$background-secondary' }} row={2} />
      <GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
      <GridItem column={2} css={{ backgroundColor: '$background-secondary' }} />
      <GridItem column={4} css={{ backgroundColor: '$background-secondary' }} />
    </Grid>
  );
}

export function Position() {
  return (
    <Grid columns="repeat(5, 1fr)" css={{ width: '100%' }} gap="small">
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
}
