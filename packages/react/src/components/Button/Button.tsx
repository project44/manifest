import type { AriaLabelingProps, DOMProps, FocusableProps, StyleProps } from '../../types';
import type { AriaButtonProps } from '@react-types/button';
import type { ButtonSize, ButtonVariant } from './types';
import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cx } from '../../styles';
import { useButton } from '@react-aria/button';
import { useButtonGroup } from './ButtonGroup.context';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useStyles } from './Button.styles';

type ButtonElement = React.ElementRef<'button'>;

interface ButtonProps extends AriaLabelingProps, DOMProps, FocusableProps, StyleProps {
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
  onClick?(event: React.MouseEvent<MouseEvent>): void;
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
    size = group?.size ?? 'medium',
    startIcon,
    variant = group?.variant ?? 'primary',
    ...other
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    {
      ...other,
      elementType: 'button',
      isDisabled,
      onPress: onClick,
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
    'manifest-button--disabled': isDisabled,
    [`manifest-button--${size}`]: size,
    [`manifest-button--${variant}`]: variant,
  });

  return (
    <button
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
    </button>
  );
});

if (__DEV__) {
  Button.displayName = 'ManifestButton';
}

export { Button };
export type { ButtonProps };
