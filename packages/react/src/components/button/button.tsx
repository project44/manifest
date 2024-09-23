import * as React from 'react';
import type { AriaButtonProps } from '@react-aria/button';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import type { FocusableProps, PressEvents } from '@react-types/shared';
import { CSS, cx, pxToRem } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, mergeRefs } from '../../utils';
import { createContext } from '../../utils/context';
import { StyledButton, StyledButtonGroup, StyledButtonIcon } from './button.styles';

type ButtonSize = 'medium' | 'small';

type ButtonVariant = 'brand' | 'danger' | 'primary' | 'secondary' | 'tertiary';

/* -------------------------------------------------------------------------------------------------
 * ButtonGroupContext
 * -----------------------------------------------------------------------------------------------*/

interface ButtonGroupContext {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>({
  name: 'ButtonGroupContext',
});

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

type ButtonElement = 'button';

interface ButtonProps extends PressEvents, FocusableProps {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Theme aware style object */
  css?: CSS;
  /** Icon added after the button text. */
  endIcon?: React.ReactElement;
  /** A URL to link to if as="a". */
  href?: string;
  /**
   * Whether to exclude the element from the sequential tab order. If true,
   * the element will not be focusable via the keyboard by tabbing. This should
   * be avoided except in rare scenarios where an alternative means of accessing
   * the element or its functionality via the keyboard is available.
   */
  excludeFromTabOrder?: boolean;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size?: ButtonSize;
  /** Icon added before the button text. */
  startIcon?: React.ReactElement;
  /** The target window for the link. */
  target?: string;
  /**
   * The behavior of the button when used in an HTML form.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The display variant of the button.
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

const Button = React.forwardRef((props, forwardedRef) => {
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
        <StyledButtonIcon
          className={cx('manifest-button__icon', 'manifest-button__icon--start')}
          placement="start"
          size={size}
        >
          {startIcon}
        </StyledButtonIcon>
      )}
      {children}
      {endIcon && (
        <StyledButtonIcon
          className={cx('manifest-button__icon', 'manifest-button__icon--end')}
          placement="end"
          size={size}
        >
          {endIcon}
        </StyledButtonIcon>
      )}
    </StyledButton>
  );
}) as ForwardRefComponent<ButtonElement, ButtonProps>;

Button.displayName = 'Button';

/* -------------------------------------------------------------------------------------------------
 * ButtonGroup
 * -----------------------------------------------------------------------------------------------*/

type ButtonGroupElement = 'div';

interface ButtonGroupProps {
  /** Theme aware style object */
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
  size?: ButtonSize;
  /**
   * The group variant
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

const ButtonGroup = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDisabled,
    isAttached,
    size,
    variant,
    ...other
  } = props;

  const context = React.useMemo(() => ({ isDisabled, size, variant }), [isDisabled, size, variant]);

  const className = cx(
    'manifest-button-group',
    {
      'manifest-button-group--attached': isAttached,
    },
    classNameProp,
  );

  return (
    <StyledButtonGroup
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isAttached={isAttached}
    >
      <ButtonGroupProvider value={context}>{children}</ButtonGroupProvider>
    </StyledButtonGroup>
  );
}) as ForwardRefComponent<ButtonGroupElement, ButtonGroupProps>;

ButtonGroup.displayName = 'ButtonGroup';

/* -------------------------------------------------------------------------------------------------
 * IconButton
 * -----------------------------------------------------------------------------------------------*/

type IconButtonElement = ButtonElement;

type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;

const IconButton = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, css, size = 'medium', ...other } = props;

  return (
    <Button
      {...other}
      ref={forwardedRef}
      className={cx('manifest-icon-button', classNameProp)}
      css={{
        ...css,
        justifyContent: 'center',
        px: size === 'small' ? pxToRem(7) : '$small',
      }}
      size={size}
    />
  );
}) as ForwardRefComponent<IconButtonElement, IconButtonProps>;

IconButton.displayName = 'IconButton';

export type { ButtonGroupProps, ButtonProps, IconButtonProps };
export { Button, ButtonGroup, IconButton };
