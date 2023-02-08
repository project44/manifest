import * as React from 'react';
import { Button } from '@project44-manifest/react-button';
import { Box } from '@project44-manifest/react-layout';
import { Transition } from '../src';

export default {
  title: 'Components/Transition',
  component: Transition,
};

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSetOpen = React.useCallback(() => {
    setIsOpen((prevOpen) => !prevOpen);
  }, [setIsOpen]);

  return (
    <>
      <Button onClick={handleSetOpen}>Toogle</Button>
      <Transition in={isOpen}>
        <Box css={{ backgroundColor: '$background-secondary', mt: 32, p: 64 }}>
          Im a fade component
        </Box>
      </Transition>
    </>
  );
};
