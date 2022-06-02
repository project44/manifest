import type { PressEvents, PressEvent, FocusableProps } from '@react-types/shared';
import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { ButtonIcon } from './ButtonIcon';
import { ManifestProps } from '../../types';
import { mergeProps } from '@react-aria/utils';
import { StyledButton } from './Button.styles';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useForwardedRef } from '../../hooks/useForwardedRef';
import { useHover } from '@react-aria/interactions';

export interface ButtonProps
  extends ManifestProps,
    PressEvents,
    FocusableProps,
    AriaButtonProps,
    VariantProps<typeof StyledButton> {
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Handler called on click event.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    as,
    autoFocus,
    children,
    className: classNameProp,
    endIcon,
    isDisabled,
    onClick,
    onPress,
    startIcon,
    ...other
  } = props;

  const ref = useForwardedRef<HTMLButtonElement | null>(forwardedRef);

  const handlePress = React.useCallback(
    (event: PressEvent) => {
      if (event.pointerType === 'keyboard' || event.pointerType === 'virtual') {
        onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>);
      }

      onPress?.(event);
    },
    [onClick, onPress],
  );

  const { buttonProps, isPressed } = useButton(
    {
      ...other,
      elementType: as,
      isDisabled,
      onPress: handlePress,
    },
    ref,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const className = cx(
    'manifest-button',
    {
      'manifest-button__disabled': isDisabled,
      'manifest-button__focused': isFocusVisible,
      'manifest-button__hovered': isHovered,
      'manifest-button__pressed': isPressed,
    },
    classNameProp,
  );

  return (
    <StyledButton
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      {...other}
      as={as}
      className={className}
      isFocusVisible={isFocusVisible && !isDisabled}
      isHovered={isHovered}
      isPressed={isPressed}
      ref={ref}
    >
      {startIcon && <ButtonIcon placement="start">{startIcon}</ButtonIcon>}
      {children}
      {endIcon && <ButtonIcon placement="end">{endIcon}</ButtonIcon>}
    </StyledButton>
  );
});
