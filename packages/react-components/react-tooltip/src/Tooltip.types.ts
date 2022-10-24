import { CSS } from '@project44-manifest/react-styles';

export interface TooltipClasses {
	root: string;
}

export type TooltipElement = 'div';

export interface TooltipProps {
	/** Override classes for the component */
	classes?: Partial<TooltipClasses>;
	/** Theme aware style object */
	css?: CSS;
	/** Whether the tooltip is open by default (uncontrolled). */
	defaultOpen?: boolean;
	/**
	 * The delay time for the tooltip to show up.
	 *
	 * @default 250
	 */
	delay?: number;
	/**
	 * Whether the tooltip should be disabled, independent from the trigger.
	 */
	isDisabled?: boolean;
	/** Whether the tooltip is open by default (controlled). */
	isOpen?: boolean;
	/**
	 * The additional offset applied along the main axis between the element and its
	 * anchor element.
	 *
	 * @default 4
	 */
	offset?: number;
	/** Handler that is called when the tooltip's open state changes. */
	onOpenChange?: (isOpen: boolean) => void;
	/**
	 * The placement of the element with respect to its anchor element.
	 *
	 * @default 'top'
	 */
	placement?: 'bottom' | 'end' | 'left' | 'right' | 'start' | 'top';
	/**
	 * The content rendered within the tooltip.
	 */
	title?: React.ReactNode;
	/**
	 * By default, opens for both focus and hover. Can be made to open only for focus.
	 */
	trigger?: 'focus';
}

export interface TooltipState {
	/** Whether the tooltip is currently showing. */
	readonly isOpen: boolean;
	/**
	 * Shows the tooltip. By default, the tooltip becomes visible after a delay
	 * depending on a global warmup timer. The `immediate` option shows the
	 * tooltip immediately instead.
	 */
	open: (immediate?: boolean) => void;
	/** Hides the tooltip. */
	close: (immediate?: boolean) => void;
}
