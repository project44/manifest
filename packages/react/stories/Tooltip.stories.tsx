import { Button, Stack, Tooltip } from '../src';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = () => (
  <Tooltip title="Tooltip">
    <Button>Hover Me</Button>
  </Tooltip>
);

export const Placement = () => (
  <Stack css={{ marginTop: 56 }} gap="x-large" orientation="horizontal">
    <Tooltip placement="bottom" title="bottom">
      <Button>Hover Me</Button>
    </Tooltip>
    <Tooltip placement="left" title="left">
      <Button>Hover Me</Button>
    </Tooltip>
    <Tooltip placement="right" title="right">
      <Button>Hover Me</Button>
    </Tooltip>
    <Tooltip placement="top" title="top">
      <Button>Hover Me</Button>
    </Tooltip>
  </Stack>
);
