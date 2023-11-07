import { Button, Stack, TooltipV2 } from '../src';

export default {
  title: 'Components/TooltipV2',
  component: TooltipV2,
};

export const Default = () => (
  <TooltipV2 title="TooltipV2">
    <Button>Hover Me</Button>
  </TooltipV2>
);

export const Placement = () => (
  <Stack css={{ marginTop: 56 }} gap="x-large" orientation="horizontal">
    <TooltipV2 placement="bottom" title="bottom">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 placement="left" title="left">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 placement="right" title="right">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 placement="top" title="top">
      <Button>Hover Me</Button>
    </TooltipV2>
  </Stack>
);

export const IsOpen = () => (
  <Stack css={{ marginTop: 56 }} gap="x-large" orientation="horizontal">
    <TooltipV2 open placement="bottom" title="bottom">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 open placement="left" title="left">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 open placement="right" title="right">
      <Button>Hover Me</Button>
    </TooltipV2>
    <TooltipV2 open placement="top" title="top">
      <Button>Hover Me</Button>
    </TooltipV2>
  </Stack>
);
