import * as React from 'react';
import { ComponentPropsWithoutRef, Primitive } from '@radix-ui/react-primitive';
import { cx, VariantProps } from '../../styles';
import { ButtonIcon } from './ButtonIcon';
import { ManifestProps } from '../../types';
import { mergeProps } from '../../utils';
import { StyledButton } from './Button.styles';
import { useFocusRing } from '@react-aria/focus';
import { useForwardedRef } from '../../hooks/useForwardedRef';

export interface ButtonProps
  extends ManifestProps,
    VariantProps<typeof StyledButton>,
    ComponentPropsWithoutRef<typeof Primitive.button> {
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}

export const Button = React.forwardRef<React.ElementRef<typeof Primitive.button>, ButtonProps>(
  (props, forwardedRef) => {
    const {
      as,
      autoFocus,
      children,
      className: classNameProp,
      endIcon,
      isDisabled,
      startIcon,
      ...other
    } = props;

    const ref = useForwardedRef<HTMLButtonElement | null>(forwardedRef);

    const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });

    const className = cx(
      'manifest-button',
      {
        'manifest-button__disabled': isDisabled,
        'manifest-button__focused': isFocusVisible,
      },
      classNameProp,
    );

    return (
      <StyledButton
        {...mergeProps(focusProps, other)}
        as={as}
        className={className}
        isFocusVisible={isFocusVisible && !isDisabled}
        ref={ref}
      >
        {startIcon && <ButtonIcon placement="start">{startIcon}</ButtonIcon>}
        {children}
        {endIcon && <ButtonIcon placement="end">{endIcon}</ButtonIcon>}
      </StyledButton>
    );
  },
);
