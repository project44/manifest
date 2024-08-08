import * as React from 'react';
import { CSS, cx, pxToRem } from '@project44-manifest/react-styles';
import type { ForwardRefComponent, PressEvent } from '@project44-manifest/react-types';
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

interface ButtonProps {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;
  /** Theme aware style object */
  css?: CSS;
  /** Icon added before the button text. */
  startIcon?: React.ReactElement;
  /** Icon added after the button text. */
  endIcon?: React.ReactElement;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** @deprecated
   * for backward compatibility
   * */
  onPress?: (e: PressEvent) => void;
  /** @deprecated
   * for backward compatibility
   * */
  onPressStart?: (e: PressEvent) => void;
  /** @deprecated
   * for backward compatibility
   * */
  onPressEnd?: (e: PressEvent) => void;
  /** @deprecated
   * for backward compatibility
   * */
  onPressChange?: (isPressed: boolean) => void;
  /** @deprecated
   * for backward compatibility
   * */
  onPressUp?: (e: PressEvent) => void;
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * The behavior of the button when used in an HTML form.
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The display variant of the button.
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

const Button = React.forwardRef((props, forwardedRef) => {
  const group = useButtonGroup();

  const {
    as,
    children,
    className: classNameProp,
    css,
    isDisabled = group?.isDisabled,
    endIcon,
    size = group?.size ?? 'medium',
    startIcon,
    variant = group?.variant ?? 'primary',
    role = 'button',
    type = 'button',
    ...other
  } = props;

  const classnames = cx('manifest-button', classNameProp, {
    'manifest-button--disabled': isDisabled,
    [`manifest-button--${size}`]: size,
    [`manifest-button--${variant}`]: variant,
  });

  const clickHandler = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;
      props.onClick?.(e);
      const pressEvent = e as unknown as PressEvent;
      props.onPress?.(pressEvent);
      props.onPressStart?.(pressEvent);
      props.onPressEnd?.(pressEvent);
      props.onPressUp?.(pressEvent);
      props.onPressChange?.(true);
    },
    [isDisabled, props],
  );

  return (
    <StyledButton
      {...other}
      ref={forwardedRef}
      as={as}
      className={classnames}
      css={css}
      isDisabled={isDisabled}
      role={role}
      size={size}
      type={type}
      variant={variant}
      onClick={clickHandler}
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
