import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { StyledButton, StyledButtonIcon } from './Button.styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '../../utils';
import { useFocusRing } from '@react-aria/focus';

export interface ButtonProps
  extends ManifestProps,
    VariantProps<typeof StyledButton>,
    React.ComponentProps<typeof StyledButton> {
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;

  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}

export const Button = React.forwardRef<React.ElementRef<typeof StyledButton>, ButtonProps>(
  (props, forwardedRef) => {
    const {
      as,
      autoFocus,
      children,
      className,
      disabled,
      endIcon,
      startIcon,
      tabIndex,
      type = 'button',
      ...other
    } = props;

    const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });

    return (
      <StyledButton
        {...mergeProps(focusProps, other)}
        as={as}
        className={cx('manifest-button', className)}
        disabled={disabled}
        isFocusVisible={isFocusVisible && !disabled}
        ref={forwardedRef}
        tabIndex={disabled ? -1 : tabIndex}
        type={type}
      >
        {startIcon && (
          <StyledButtonIcon className="manifest-button-icon__start" placement="start">
            {startIcon}
          </StyledButtonIcon>
        )}
        {children}
        {endIcon && (
          <StyledButtonIcon className="manifest-button-icon__end" placement="end">
            {endIcon}
          </StyledButtonIcon>
        )}
      </StyledButton>
    );
  },
);
