import * as React from 'react';
import { useDialog } from '@react-aria/dialog';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { DismissButton, useModal, useOverlay } from '@react-aria/overlays';
import { AnimatePresence, motion } from 'framer-motion';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '@project44-manifest/react-utils';
import { useStyles } from './Popover.styles';
import { PopoverElement, PopoverProps } from './Popover.types';

export const PopoverContent = React.forwardRef((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		children,
		className: classNameProp,
		classes: classesProp,
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

	const { classes, cx } = useStyles(props, {
		css,
		name: 'popover',
		classes: classesProp,
		slots: { root: [] },
	});

	return (
		<AnimatePresence onExitComplete={onExited}>
			{isOpen && (
				<motion.div
					animate={{ opacity: 1 }}
					className={cx(classes.root, classNameProp)}
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					transition={{ ease: 'easeOut', duration: 0.15 }}
					onAnimationStart={onEntered}
				>
					<FocusScope restoreFocus>
						<Comp
							ref={mergeRefs(popoverRef, forwardedRef)}
							className={classes.surface}
							data-focus-visible={isFocusVisible ? '' : undefined}
							{...mergeProps(overlayProps, modalProps, dialogProps, focusProps, other)}
						>
							<DismissButton onDismiss={onClose} />
							{children}
							<DismissButton onDismiss={onClose} />
						</Comp>
					</FocusScope>
				</motion.div>
			)}
		</AnimatePresence>
	);
}) as ForwardRefComponent<PopoverElement, PopoverProps>;
