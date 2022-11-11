/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@project44-manifest/react-button';
import { Box, Flex } from '@project44-manifest/react-layout';
import type { ComponentMeta } from '@storybook/react';
import { Popover, PopoverPlacement, usePopover, usePopoverState } from '../src';

function PlacementComponent(props: { placement: PopoverPlacement }) {
	const { placement } = props;

	const state = usePopoverState({});
	const { onClose, overlayProps, overlayRef, triggerProps, triggerRef } = usePopover(state, {
		placement,
	});

	return (
		<>
			<Button {...triggerProps} ref={triggerRef}>
				{placement}
			</Button>
			<Popover {...overlayProps} ref={overlayRef} isOpen={state.isOpen} onClose={onClose}>
				<Box css={{ p: '$medium' }}>This is a popover</Box>
			</Popover>
		</>
	);
}

export default {
	component: Popover,
	title: 'Components/Popover',
} as ComponentMeta<typeof Popover>;

export function Default() {
	const state = usePopoverState({});
	const { onClose, overlayProps, overlayRef, triggerProps, triggerRef } = usePopover(state, {});

	return (
		<>
			<Button {...triggerProps} ref={triggerRef}>
				Open Popover
			</Button>
			<Popover {...overlayProps} ref={overlayRef} isOpen={state.isOpen} onClose={onClose}>
				<Box css={{ p: '$medium' }}>This is a popover</Box>
			</Popover>
		</>
	);
}

export function Placement() {
	return (
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
}
