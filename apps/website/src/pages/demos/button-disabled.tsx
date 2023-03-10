import { Button } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function ButtonExample() {
  return <Button isDisabled>Button</Button>;
}

export default withDemoWrapper(ButtonExample);
