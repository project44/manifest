import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../..';
import { DialogV2, DialogV2Props, DialogV2Size } from '../dialogv2';

const meta: Meta<DialogV2Props> = {
  component: DialogV2,
  title: 'Components/Dialogv2',
  argTypes: {
    size: {
      options: [DialogV2Size.small, DialogV2Size.medium, DialogV2Size.large],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryFn<DialogV2Props> = (args: DialogV2Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => void setIsOpen(false), []);
  const handleOpen = React.useCallback(() => void setIsOpen(true), []);

  const props: DialogV2Props = {
    isOpen: isOpen,
    headerProps: {
      title: 'Dialog Title',
      onClose: handleClose,
    },
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`,
    footer: (
      <>
        <Button variant="secondary" onPress={handleClose}>
          Close
        </Button>
        <Button onPress={handleClose}>Confirm</Button>
      </>
    ),
  };

  return (
    <>
      <Button onPress={handleOpen}>Open Dialog</Button>
      <DialogV2 {...args} {...props}></DialogV2>
    </>
  );
};

Default.args = {
  isDismissable: true,
  isKeyboardDismissDisabled: true,
  edgeToEdge: false,
  size: DialogV2Size.small,
};
