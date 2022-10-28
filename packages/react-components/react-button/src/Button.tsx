import * as React from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { cx } from '@project44-manifest/react-styles';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '@project44-manifest/react-utils';
import { ButtonIcon } from './Button.icon';
import { StyledButton } from './Button.styles';
import { ButtonElement, ButtonProps } from './Button.types';
import { useButtonGroup } from './ButtonGroup.context';

export const Button = React.forwardRef((props, forwardedRef) => {
	const group = useButtonGroup();

	const {
		as,
		autoFocus,
		children,
		className: classNameProp,
		css,
		isDisabled = group?.isDisabled,
		endIcon,
		href,
		onClick,
		onPress,
		onPressStart,
		onPressEnd,
		onPressChange,
		onPressUp,
		rel,
		size = group?.size ?? 'medium',
		startIcon,
		variant = group?.variant ?? 'primary',
		target,
		type = 'button',
		...other
	} = props;

	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const { buttonProps, isPressed } = useButton(
		{
			...other,
			elementType: typeof as === 'string' ? as : 'button',
			href,
			isDisabled,
			onClick,
			onPress,
			onPressStart,
			onPressEnd,
			onPressChange,
			onPressUp,
			rel,
			target,
			type,
		} as AriaButtonProps,
		buttonRef,
	);
	const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { isHovered, hoverProps } = useHover({ isDisabled });

	const classnames = cx('manifest-button', classNameProp, {
		'manifest-button--disabled': isDisabled,
		[`manifest-button--${size}`]: size,
		[`manifest-button--${variant}`]: variant,
	});

	return (
		<StyledButton
			{...mergeProps(buttonProps, focusProps, hoverProps, other)}
			ref={mergeRefs(buttonRef, forwardedRef)}
			as={as}
			className={classnames}
			css={css}
			isDisabled={isDisabled}
			isFocusVisible={isFocusVisible}
			isHovered={isHovered}
			isPressed={isPressed}
			size={size}
			variant={variant}
		>
			{startIcon && (
				<ButtonIcon
					className={cx('manifest-button__icon', 'manifest-button__icon--start')}
					placement="start"
					size={size}
				>
					{startIcon}
				</ButtonIcon>
			)}
			{children}
			{endIcon && (
				<ButtonIcon
					className={cx('manifest-button__icon', 'manifest-button__icon--end')}
					placement="end"
					size={size}
				>
					{endIcon}
				</ButtonIcon>
			)}
		</StyledButton>
	);
}) as ForwardRefComponent<ButtonElement, ButtonProps>;
