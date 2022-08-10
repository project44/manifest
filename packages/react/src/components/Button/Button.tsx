import type { ButtonSize, ButtonVariant } from './types';
import type { DOMProps, StyleProps } from '../../types';
import type { AriaButtonProps } from '@react-types/button';
import type { PressEvent } from '@react-types/shared';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { useButton } from '@react-aria/button';
import { useButtonGroup } from '../ButtonGroup';
import { useDOMRef } from '../../hooks';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Button.styles';

type ButtonElement = React.ElementRef<'button'>;

interface ButtonProps extends AriaButtonProps, DOMProps, StyleProps {
  /**
   * The content of the button.
   */
  children?: React.ReactNode;
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

const Button = React.forwardRef<ButtonElement, ButtonProps>((props, forwardedRef) => {
  const group = useButtonGroup();

  const {
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

  const buttonRef = useDOMRef(forwardedRef);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
    },
    [onClick],
  );

  const handlePress = React.useCallback(
    (event: PressEvent) => {
      if (event.pointerType === 'keyboard' || event.pointerType === 'virtual') {
        onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
      }

      onPress?.(event);
    },
    [onClick, onPress],
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
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      className={classnames}
      ref={buttonRef}
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
    </button>
  );
});

if (__DEV__) {
  Button.displayName = 'ManifestButton';
}

export { Button };
export type { ButtonProps };
