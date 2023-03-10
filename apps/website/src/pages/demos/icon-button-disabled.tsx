import { IconButton } from '@project44-manifest/react';
import { Add } from '@project44-manifest/react-icons';
import { withDemoWrapper } from '../../components/DemoWrapper';

function IconButtonExample() {
  return (
    <IconButton isDisabled>
      <Add />
    </IconButton>
  );
}

export default withDemoWrapper(IconButtonExample);
