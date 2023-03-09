import { Button } from '@project44-manifest/react';
import { Add } from '@project44-manifest/react-icons';
import { withDemoWrapper } from '../../components/DemoWrapper';

function ButtonExample() {
  return <Button endIcon={<Add />}>Button</Button>;
}

export default withDemoWrapper(ButtonExample);
