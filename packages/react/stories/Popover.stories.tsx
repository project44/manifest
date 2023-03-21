import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Box,
  Button,
  Flex,
  Overlay,
  Placement as PopoverPlacement,
  Popover,
  PopoverProps,
  useOverlayPosition,
  useOverlayTrigger,
  useOverlayTriggerState,
} from '../src';

function PlacementComponent(props: { placement: PopoverPlacement }) {
  const { placement } = props;

  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);
  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    onClose: state.close,
    overlayRef,
    placement,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        {placement}
      </Button>
      <Overlay isOpen={state.isOpen}>
        <Popover
          {...overlayProps}
          {...positionProps}
          ref={overlayRef}
          isOpen={state.isOpen}
          onClose={handleClose}
        >
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
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const state = useOverlayTriggerState({});
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);
  const { overlayProps: positionProps } = useOverlayPosition({
    isOpen: state.isOpen,
    onClose: state.close,
    overlayRef,
    targetRef: triggerRef,
  });

  const handleClose = React.useCallback(() => {
    state.close();
  }, [state]);

  return (
    <>
      <Button {...triggerProps} ref={triggerRef}>
        Open Popover
      </Button>
      <Overlay isOpen={state.isOpen}>
        <Popover
          {...overlayProps}
          {...positionProps}
          ref={overlayRef}
          isOpen={state.isOpen}
          onClose={handleClose}
        >
          <Box css={{ p: '$medium' }}>This is a popover</Box>
        </Popover>
      </Overlay>
    </>
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
