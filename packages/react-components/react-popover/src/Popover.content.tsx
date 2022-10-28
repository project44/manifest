import * as React from 'react';
import { useDialog } from '@react-aria/dialog';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { AnimatePresence, motion } from 'framer-motion';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '@project44-manifest/react-utils';
import { StyledPopover } from './Popover.styles';
import { PopoverElement, PopoverProps } from './Popover.types';

export const PopoverContent = React.forwardRef((props, forwardedRef) => {
	const {
		as,
		children,
		className: classNameProp,
		css,
		isDismissable = true,
		isKeyboardDismissDisabled = false,
		isOpen,
		onClose,
		onEntered,
		onExited,
		shouldCloseOnBlur = false,
		shouldCloseOnInteractOutside,
		...other
	} = props;

	const popoverRef = React.useRef<HTMLDivElement>(null);

	const { modalProps } = useModal({ isDisabled: true });
	const { dialogProps } = useDialog({ role: 'dialog' }, popoverRef);
	const { overlayProps } = useOverlay(
		{
			isDismissable: isDismissable && isOpen,
			isKeyboardDismissDisabled,
			isOpen,
			onClose,
			shouldCloseOnBlur,
			shouldCloseOnInteractOutside,
		},
		popoverRef,
	);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<AnimatePresence onExitComplete={onExited}>
			{isOpen && (
				<motion.div
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					transition={{ ease: 'easeOut', duration: 0.15 }}
					onAnimationStart={onEntered}
				>
					<FocusScope restoreFocus>
						<StyledPopover
							{...mergeProps(overlayProps, modalProps, dialogProps, focusProps, other)}
							ref={mergeRefs(popoverRef, forwardedRef)}
							as={as}
							className={cx('manifest-popover', classNameProp)}
							css={css}
							isFocusVisible={isFocusVisible}
						>
							<DismissButton onDismiss={onClose} />
							{children}
							<DismissButton onDismiss={onClose} />
						</StyledPopover>
					</FocusScope>
				</motion.div>
			)}
		</AnimatePresence>
	);
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
