import * as React from 'react';
import type { Placement } from '@react-types/overlays';

export interface PopoverContext {
	isDismissable?: boolean;
	isKeyboardDismissDisabled?: boolean;
	isNonModal?: boolean;
	isOpen?: boolean;
	overlayProps?: React.HTMLAttributes<HTMLDivElement>;
	overlayRef: React.RefObject<HTMLDivElement>;
	placement?: Placement;
	positionProps: React.HTMLAttributes<Element>;
	shouldCloseOnBlur?: boolean;
	onClose?: () => void;
	onEntered?: () => void;
	onExited?: () => void;
	shouldCloseOnInteractOutside?: (element: Element) => boolean;
}

export const PopoverContext = React.createContext<PopoverContext | null>(null);

export const usePopoverContext = () => React.useContext(PopoverContext);
