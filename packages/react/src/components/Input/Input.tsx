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
import { useFormControl } from '../FormControl';

type OmittedInputProps = 'disabled' | 'readOnly' | 'required';
type InputElement = React.ElementRef<typeof StyledInput>;
type InputNativeProps = Omit<React.ComponentPropsWithRef<typeof StyledInput>, OmittedInputProps>;

export interface InputProps
  extends ManifestProps,
    VariantProps<typeof StyledInput>,
    InputNativeProps {
  /**
   * Icon displayed at the end of the text field.
   */
  endIcon?: React.ReactNode;
  /**
   * Whether the control is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the control is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the control is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the control is required.
   */
  isRequired?: boolean;
  /**
   * Icon displayed at the start of the text field.
   */
  startIcon?: React.ReactNode;
}

export const Input = React.forwardRef<InputElement, InputProps>((props, forwardedRef) => {
  const formControl = useFormControl();

  const {
    className,
    endIcon,
    id = formControl?.id,
    isDisabled = formControl?.isDisabled,
    isInvalid = formControl?.isInvalid,
    isReadOnly = formControl?.isReadOnly,
    isRequired = formControl?.isReadOnly,
    onBlur,
    onFocus,
    onMouseEnter,
    onMouseLeave,
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

  return (
    <StyledInputWrapper className="manifest-input--wrapper" isDisabled={isDisabled}>
      {startIcon && (
        <StyledInputIcon className="manifest-input--icon__start" isInvalid={isInvalid}>
          {startIcon}
        </StyledInputIcon>
      )}

      <StyledInput
        {...other}
        aria-describedby={formControl?.hasHelperText ? formControl?.helperTextId : undefined}
        aria-invalid={isInvalid ? true : undefined}
        aria-readonly={isReadOnly || isDisabled ? true : undefined}
        aria-required={isRequired ? true : undefined}
        className={cx('manifest-input', className)}
        disabled={isDisabled}
        hasEndIcon={!!endIcon}
        hasStartIcon={!!startIcon}
        id={id}
        isInvalid={isInvalid}
        onBlur={chainCallbacks(onBlur, handleBlur)}
        onFocus={chainCallbacks(onFocus, handleFocus)}
        onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
        onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
        ref={forwardedRef}
        readOnly={isReadOnly}
        required={isRequired}
        size={size}
      />

      <StyledInputContainer
        aria-hidden="true"
        className="manifest-input--container"
        isDisabled={isDisabled}
        isFocused={isFocused}
        isHovered={isHovered}
        isInvalid={isInvalid}
      />

      {endIcon && (
        <StyledInputIcon className="manifest-input--icon__end" isInvalid={isInvalid}>
          {endIcon}
        </StyledInputIcon>
      )}
    </StyledInputWrapper>
  );
});

Input.displayName = 'Input';
