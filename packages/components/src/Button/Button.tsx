import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import {
  CSS,
  cx,
  useButtonStyles,
  useButtonGroupStyles,
  useIconButtonStyles,
} from './Button.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';

type Size = 'medium' | 'small';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'brand';

/**
 * -----------------------------------------------------------------------------------------------
 * Button Group Context
 * -----------------------------------------------------------------------------------------------
 */

interface ButtonGroupContext {
  isDisabled?: boolean;
  size?: Size;
  variant?: Variant;
}

export const ButtonGroupContext = React.createContext<ButtonGroupContext>({});

export const useButtonGroup = () => React.useContext(ButtonGroupContext);

/**
 * -----------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------
 */

type ButtonElement = React.ElementRef<'button'>;
type ButtonNativeProps = Omit<React.ComponentPropsWithoutRef<'button'>, keyof AriaButtonProps>;

interface ButtonProps extends ButtonNativeProps, AriaButtonProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size?: Size;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * The display variant of the button.
   *
   * @default 'primary'
   */
  variant?: Variant;
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
  } = props;

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    { ...props, elementType: 'button', isDisabled, onPress: onClick } as AriaButtonProps,
    buttonRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const { className } = useButtonStyles({
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

  return (
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      className={cx('manifest-button', className, classNameProp)}
      ref={mergeRefs(buttonRef, forwardedRef)}
    >
      {startIcon && (
        <span className={cx('manifest-button--icon', 'manifest-button--icon__start')}>
          {startIcon}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={cx('manifest-button--icon', 'manifest-button--icon__end')}>{endIcon}</span>
      )}
    </button>
  );
});

if (__DEV__) {
  Button.displayName = 'ManifestButton';
}

Button.toString = () => '.manifest-button';

/**
 * -----------------------------------------------------------------------------------------------
 * Button Group
 * -----------------------------------------------------------------------------------------------
 */

type ButtonGroupElement = React.ElementRef<'div'>;
type ButtonGroupNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface ButtonGroupProps extends ButtonGroupNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Whether the buttons in the button group are all disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the buttons in the button are attached.
   */
  isAttached?: boolean;
  /**
   * The size of the buttons in the group.
   *
   * @default 'medium'
   */
  size?: Size;
  /**
   * The group variant
   *
   * @default 'primary'
   */
  variant?: Variant;
}

const ButtonGroup = React.forwardRef<ButtonGroupElement, ButtonGroupProps>(
  (props: ButtonGroupProps, forwardedRef) => {
    const {
      children,
      className: classNameProp,
      css,
      isDisabled,
      isAttached,
      size,
      variant,
      ...other
    } = props;

    const { className } = useButtonGroupStyles({ css, isAttached });

    return (
      <div
        {...other}
        className={cx('manifest-button-group', className, classNameProp)}
        ref={forwardedRef}
      >
        <ButtonGroupContext.Provider value={{ isDisabled, size, variant }}>
          {children}
        </ButtonGroupContext.Provider>
      </div>
    );
  },
);

if (__DEV__) {
  ButtonGroup.displayName = 'ManifestButtonGroup';
}

ButtonGroup.toString = () => '.manifest-button-group';

/**
 * -----------------------------------------------------------------------------------------------
 * Icon Button
 * -----------------------------------------------------------------------------------------------
 */

type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;

const IconButton = React.forwardRef<ButtonElement, IconButtonProps>(
  (props: IconButtonProps, forwardedRef) => {
    const { className: classNameProp, css, size = 'medium', variant = 'primary', ...other } = props;

    const { className } = useIconButtonStyles({ css, size });

    return (
      <Button
        {...other}
        className={cx('manifest-icon-button', className, classNameProp)}
        ref={forwardedRef}
        size={size}
        variant={variant}
      />
    );
  },
);

if (__DEV__) {
  IconButton.displayName = 'ManifestIconButton';
}

IconButton.toString = () => '.manifest-icon-button';

export { Button, ButtonGroup, IconButton };
export type { ButtonProps, ButtonGroupProps, IconButtonProps };
