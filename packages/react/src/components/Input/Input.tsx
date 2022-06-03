import * as React from 'react';
import {
  StyledInput,
  StyledInputContainer,
  StyledInputIcon,
  StyledInputWrapper,
} from './Input.styles';
import { cx, VariantProps } from '../../styles';
import { chainCallbacks } from '../../utils';
import { ManifestProps } from '../../types';

export interface InputProps
  extends ManifestProps,
    VariantProps<typeof StyledInput>,
    React.ComponentProps<typeof StyledInput> {
  /**
   * Icon displayed at the end of the text field.
   */
  endIcon?: React.ReactNode;
  /**
   * Whether the input is invalid.
   */
  isInvalid?: boolean;
  /**
   * Icon displayed at the start of the text field.
   */
  startIcon?: React.ReactNode;
}

export const Input = React.forwardRef<React.ElementRef<typeof StyledInput>, InputProps>(
  (props, forwardedRef) => {
    const {
      className: classNameProp,
      disabled,
      endIcon,
      isInvalid,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      required,
      readOnly,
      startIcon,
      size = 'medium',
      ...other
    } = props;

    const [isFocused, setIsFocused] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleBlur = React.useCallback(() => {
      setIsFocused(false);
    }, [setIsFocused]);

    const handleFocus = React.useCallback(() => {
      setIsFocused(true);
    }, [setIsFocused]);

    const handleMouseEnter = React.useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);

    const handleMouseLeave = React.useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);

    const className = cx(
      'manifest-input',
      {
        'mainfest-input__has-end-icon': !!endIcon,
        'manifest-input__has-start-icon': !!startIcon,
      },
      classNameProp,
    );

    return (
      <StyledInputWrapper className="manifest-input--wrapper" isDisabled={disabled}>
        {startIcon && (
          <StyledInputIcon className="manifest-input--start-icon" isInvalid={isInvalid}>
            {startIcon}
          </StyledInputIcon>
        )}

        <StyledInput
          {...other}
          aria-invalid={isInvalid ? true : undefined}
          aria-readonly={readOnly || disabled ? true : undefined}
          aria-required={required ? true : undefined}
          className={className}
          disabled={disabled}
          isInvalid={isInvalid}
          onBlur={chainCallbacks(onBlur, handleBlur)}
          onFocus={chainCallbacks(onFocus, handleFocus)}
          onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
          onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
          ref={forwardedRef}
          readOnly={readOnly}
          required={required}
          size={size}
        />

        <StyledInputContainer
          aria-hidden="true"
          className="manifest-input--container"
          isDisabled={disabled}
          isFocused={isFocused}
          isHovered={isHovered}
          isInvalid={isInvalid}
        />

        {endIcon && (
          <StyledInputIcon className="manifest-input--end-icon" isInvalid={isInvalid}>
            {endIcon}
          </StyledInputIcon>
        )}
      </StyledInputWrapper>
    );
  },
);

Input.displayName = 'Input';
