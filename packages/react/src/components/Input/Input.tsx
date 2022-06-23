import * as React from 'react';
import { StyledInput, StyledInputIcon, StyledInputWrapper } from './Input.styles';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { useFormControl } from '../FormControl';
import { useHover } from '@react-aria/interactions';

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
    startIcon,
    size = 'medium',
    ...other
  } = props;

  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <StyledInputWrapper
      {...hoverProps}
      className="manifest-input--wrapper"
      isDisabled={isDisabled}
      isHovered={isHovered}
      isInvalid={isInvalid}
    >
      {startIcon && (
        <StyledInputIcon
          className="manifest-input--icon__start"
          isInvalid={isInvalid}
          placement="start"
          size={size}
        >
          {startIcon}
        </StyledInputIcon>
      )}

      <StyledInput
        {...other}
        aria-describedby={formControl?.hasHelperText ? formControl?.helperTextId : undefined}
        aria-invalid={isInvalid ? true : undefined}
        aria-readonly={isReadOnly || isDisabled ? true : undefined}
        className={cx('manifest-input', className)}
        disabled={isDisabled}
        id={id}
        isInvalid={isInvalid}
        ref={forwardedRef}
        readOnly={isReadOnly}
        required={isRequired}
        size={size}
      />

      {endIcon && (
        <StyledInputIcon
          className="manifest-input--icon__end"
          isInvalid={isInvalid}
          placement="end"
          size={size}
        >
          {endIcon}
        </StyledInputIcon>
      )}
    </StyledInputWrapper>
  );
});

Input.displayName = 'Input';
