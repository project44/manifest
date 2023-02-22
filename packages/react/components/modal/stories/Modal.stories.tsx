import * as React from 'react';
import { Button } from '@project44-manifest/react-button';
import { Box } from '@project44-manifest/react-layout';
import { useDialog } from '@project44-manifest/react-overlay';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../src';

const meta: Meta<ModalProps> = {
  component: Modal,
  title: 'Components/Modal',
};

export default meta;

function Dialog() {
  const dialofRef = React.useRef<HTMLDivElement>(null);

  const { dialogProps } = useDialog({ role: 'dialog' }, dialofRef);

  return (
    <Box
      {...dialogProps}
      ref={dialofRef}
      css={{
        backgroundColor: '$background-surface',
        boxShadow: '$large',
        maxWidth: 600,
        padding: '$x-large',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Box>
  );
}

export const Default: Story<ModalProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => void setIsOpen(false), []);
  const handleOpen = React.useCallback(() => void setIsOpen(true), []);

  return (
    <>
      <Button onPress={handleOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Dialog />
      </Modal>
    </>
  );
};
