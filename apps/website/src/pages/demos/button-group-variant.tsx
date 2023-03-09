import { Button, ButtonGroup } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function ButtonGroupExample() {
  return (
    <ButtonGroup variant="secondary">
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  );
}

export default withDemoWrapper(ButtonGroupExample);
