import * as React from 'react';
import { Button } from '@project44-manifest/react-button';
import { Box } from '@project44-manifest/react-layout';
import { Meta, Story } from '@storybook/react';
import { Popover, PopoverProps, usePopoverTrigger, usePopoverTriggerState } from '../src';

const argTypes = {
  offset: {
    control: 'number',
    defaultValue: 4,
  },
  isDismissable: {
    control: 'boolean',
    defaultValue: true,
  },
  isKeyboardDismissDisabled: {
    control: 'boolean',
    defaultValue: false,
  },
  maxHeight: {
    control: 'number',
  },
  placement: {
    defaultValue: 'bottom',
    control: { type: 'select' },
    options: [
      'bottom end',
      'bottom left',
      'bottom right',
      'bottom start',
      'bottom',
      'end bottom',
      'end top',
      'end',
      'left bottom',
      'left top',
      'left',
      'right bottom',
      'right top',
      'right',
      'start bottom',
      'start top',
      'start',
      'top end',
      'top left',
      'top right',
      'top start',
      'top',
    ],
  },
  shouldCloseOnBlur: {
    control: 'boolean',
    defaultValue: false,
  },
  shouldFlip: {
    control: 'boolean',
    defaultValue: true,
  },
};

const meta: Meta<PopoverProps> = {
  component: Popover,
  title: 'Components/Popover',
  argTypes,
};

export default meta;

export const Default: Story<Omit<PopoverProps, 'state' | 'triggerRef'>> = (props) => {
  const state = usePopoverTriggerState({});
  const { overlayProps, overlayRef, triggerProps, triggerRef } = usePopoverTrigger({}, state);

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        Open Popover
      </Button>
      <Popover {...overlayProps} ref={overlayRef} state={state} triggerRef={triggerRef} {...props}>
        <Box css={{ p: '$medium' }}>This is a popover</Box>
      </Popover>
    </>
  );
};

// export const Controlled: Story<PopoverProps> = (props) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleOpen = React.useCallback(() => {
//     setIsOpen((prevIsOpen) => !prevIsOpen);
//   }, []);

//   return (
//     <Popover {...props} isOpen={isOpen} onOpenChange={handleOpen}>
//       <PopoverTrigger>
//         <Button>Open Popover</Button>
//       </PopoverTrigger>
//       <PopoverContent>
//         <Box css={{ p: '$medium' }}>This is a controlled popover</Box>
//       </PopoverContent>
//     </Popover>
//   );
// };
