import { Button, Tooltip } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function TooltipExample() {
  return (
    <Tooltip title="This is a tooltip">
      <Button>Hover Me</Button>
    </Tooltip>
  );
}

export default withDemoWrapper(TooltipExample);
