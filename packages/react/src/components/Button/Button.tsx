import type { ButtonSize, ButtonVariant } from './types';
import type { AriaButtonProps } from '@react-types/button';
import type { PressEvent } from '@react-types/shared';
import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import { useButton } from '@react-aria/button';
import { useButtonGroup } from '../ButtonGroup';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Button.styles';

export type ButtonElement = 'div';

export interface ButtonOptions<T extends As = ButtonElement>
	extends Options<T>,
		AriaButtonProps,
		StyleProps {
	/**
	 * Icon added after the button text.
	 */
	endIcon?: React.ReactElement;
	/**
	 * Whether the button is disabled.
	 */
	isDisabled?: boolean;
	/**
	 * The size of the button.
	 *
	 * @default 'medium'
	 */
	size?: ButtonSize;
	/**
	 * Icon added before the button text.
	 */
	startIcon?: React.ReactElement;
	/**
	 * The display variant of the button.
	 *
	 * @default 'primary'
	 */
	variant?: ButtonVariant;
	/**
	 * Handler called on a click event.
	 */
	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export type ButtonProps<T extends As = ButtonElement> = Props<ButtonOptions<T>>;

export const Button = createComponent<ButtonOptions>((props, forwardedRef) => {
	const group = useButtonGroup();

	const {
		as: Comp = 'button',
		autoFocus,
		children,
		className: classNameProp,
		css,
		isDisabled = group?.isDisabled,
		endIcon,
		onClick,
		onPress,
		size = group?.size ?? 'medium',
		startIcon,
		variant = group?.variant ?? 'primary',
		...other
	} = props;

	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const handleClick = React.useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			onClick?.(event);
		},
		[onClick],
	);

	const handlePress = React.useCallback(
		(event: PressEvent) => {
			onPress?.(event);
		},
		[onPress],
	);

	const { buttonProps, isPressed } = useButton(
		{
			...other,
			elementType: 'button',
			isDisabled,
			onClick: handleClick,
			onPress: handlePress,
		} as AriaButtonProps,
		buttonRef,
	);
	const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { hoverProps, isHovered } = useHover({ isDisabled });

	const { className } = useStyles({
		css,
		hasEndIcon: !!endIcon,
		hasStartIcon: !!startIcon,
		isDisabled,
		isFocusVisible,
		isHovered,
		isPressed,
		size,
		variant,
	});

	const classnames = cx(className, classNameProp, {
		'manifest-button': true,
		'manifest-button--disabled': isDisabled,
		[`manifest-button--${size}`]: size,
		[`manifest-button--${variant}`]: variant,
	});

	return (
		<Comp
			{...mergeProps(buttonProps, focusProps, hoverProps)}
			className={classnames}
			ref={mergeRefs(buttonRef, forwardedRef)}
		>
			{startIcon && (
				<span className={cx('manifest-button__icon', 'manifest-button__icon--start')}>
					{startIcon}
				</span>
			)}
			{children}
			{endIcon && (
				<span className={cx('manifest-button__icon', 'manifest-button__icon--end')}>{endIcon}</span>
			)}
		</Comp>
	);
});
