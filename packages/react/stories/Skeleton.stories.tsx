import { Grid, GridItem, Skeleton } from '../src';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export const Card = () => (
  <Grid columns="repeat(3, 1fr)" css={{ width: '100%' }} gap="large">
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="225" />
      </Skeleton>
    </GridItem>
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="225" />
      </Skeleton>
    </GridItem>
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="90%" x="0" y="225" />
      </Skeleton>
    </GridItem>
  </Grid>
);

export const ActionCard = () => (
  <Grid columns="repeat(3, 1fr)" css={{ width: '100%' }} gap="large">
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="30" rx="0" ry="0" width="100" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="253" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="280" />
      </Skeleton>
    </GridItem>
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="30" rx="0" ry="0" width="100" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="253" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="280" />
      </Skeleton>
    </GridItem>
    <GridItem>
      <Skeleton height={334} width="100%">
        <rect height="180" rx="4" ry="4" width="100%" x="0" y="0" />
        <rect height="30" rx="0" ry="0" width="100" x="0" y="200" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="253" />
        <rect height="15" rx="0" ry="0" width="100%" x="0" y="280" />
      </Skeleton>
    </GridItem>
  </Grid>
);

export const Paragraph = () => (
  <Skeleton>
    <rect height="6" rx="3" ry="3" width="88" x="48" y="8" />
    <rect height="6" rx="3" ry="3" width="52" x="48" y="26" />
    <rect height="6" rx="3" ry="3" width="410" x="0" y="56" />
    <rect height="6" rx="3" ry="3" width="380" x="0" y="72" />
    <rect height="6" rx="3" ry="3" width="178" x="0" y="88" />
    <circle cx="20" cy="20" r="20" />
  </Skeleton>
);

export const List = () => (
  <Skeleton>
    <circle cx="10" cy="20" r="8" />
    <rect height="10" rx="5" ry="5" width="220" x="25" y="15" />
    <circle cx="10" cy="50" r="8" />
    <rect height="10" rx="5" ry="5" width="220" x="25" y="45" />
    <circle cx="10" cy="80" r="8" />
    <rect height="10" rx="5" ry="5" width="220" x="25" y="75" />
    <circle cx="10" cy="110" r="8" />
    <rect height="10" rx="5" ry="5" width="220" x="25" y="105" />
  </Skeleton>
);
