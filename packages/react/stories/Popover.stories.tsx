import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Box,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Flex,
  Icon,
  IconButton,
  Overlay,
  Placement as PopoverPlacement,
  Popover,
  PopoverProps,
  usePopoverTrigger,
  usePopoverTriggerState,
} from '../src';

function PlacementComponent(props: { placement: PopoverPlacement }) {
  const { placement } = props;

  const state = usePopoverTriggerState({});
  const { overlayProps, overlayRef, triggerProps, triggerRef } = usePopoverTrigger(
    {
      placement,
    },
    state,
  );

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        {placement}
      </Button>
      <Overlay isOpen={state.isOpen}>
        <Popover {...overlayProps} ref={overlayRef} isOpen={state.isOpen} onClose={handleClose}>
          <Box css={{ p: '$medium' }}>This is a popover</Box>
        </Popover>
      </Overlay>
    </>
  );
}

const meta: Meta<PopoverProps> = {
  component: Popover,
  title: 'Components/Popover',
};

export default meta;

export const Default: Story<PopoverProps> = (props) => {
  const state = usePopoverTriggerState({});
  const { overlayProps, overlayRef, triggerProps, triggerRef } = usePopoverTrigger({}, state);

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        Open Popover
      </Button>
      <Overlay isOpen={state.isOpen}>
        <Popover {...overlayProps} ref={overlayRef} isOpen={state.isOpen} onClose={handleClose}>
          <Box css={{ p: '$medium' }}>This is a popover</Box>
        </Popover>
      </Overlay>
    </>
  );
};

export const Nested: Story<PopoverProps> = (props) => {
  const state = usePopoverTriggerState({});
  const { overlayProps, overlayRef, triggerProps, triggerRef } = usePopoverTrigger({}, state);

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  const containerRef = React.useRef(null);

  return (
    <div ref={containerRef}>
      <Button {...triggerProps} ref={triggerRef}>
        Open Popover
      </Button>
      {/* Override the default mounting position (global document) to a specific element */}
      <Overlay containerRef={containerRef} isOpen={state.isOpen}>
        <Popover {...overlayProps} ref={overlayRef} isOpen={state.isOpen} onClose={handleClose}>
          <Box css={{ p: '$medium' }}>
            <Dropdown>
              <IconButton variant="primary">
                <Icon icon="expand_more" />
              </IconButton>
              <DropdownMenu>
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="account">Account</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Box>
        </Popover>
      </Overlay>
    </div>
  );
};

export const Placement = () => (
  <Flex wrap css={{ px: '$large' }} gap="large" orientation="horizontal">
    <PlacementComponent placement="bottom" />
    <PlacementComponent placement="bottom end" />
    <PlacementComponent placement="bottom left" />
    <PlacementComponent placement="bottom right" />
    <PlacementComponent placement="bottom start" />
    <PlacementComponent placement="end" />
    <PlacementComponent placement="end bottom" />
    <PlacementComponent placement="end top" />
    <PlacementComponent placement="left" />
    <PlacementComponent placement="left bottom" />
    <PlacementComponent placement="left top" />
    <PlacementComponent placement="right" />
    <PlacementComponent placement="right bottom" />
    <PlacementComponent placement="right top" />
    <PlacementComponent placement="start" />
    <PlacementComponent placement="start bottom" />
    <PlacementComponent placement="start top" />
    <PlacementComponent placement="top" />
    <PlacementComponent placement="top end" />
    <PlacementComponent placement="top left" />
    <PlacementComponent placement="top right" />
    <PlacementComponent placement="top start" />
  </Flex>
);
