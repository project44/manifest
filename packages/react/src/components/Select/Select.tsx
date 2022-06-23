import * as React from 'react';
import { StyledSelect, StyledSelectIcon, StyledSelectWrapper } from './Select.styles';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { useFormControl } from '../FormControl';
import { Icon } from '../Icon';
import { useHover } from '@react-aria/interactions';

type OmittedSelectProps = 'disabled' | 'readOnly' | 'required';
type SelectElement = React.ElementRef<typeof StyledSelect>;
type SelectNativeProps = Omit<React.ComponentPropsWithRef<typeof StyledSelect>, OmittedSelectProps>;

export interface SelectProps
  extends ManifestProps,
    VariantProps<typeof StyledSelect>,
    SelectNativeProps {
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

export const Select = React.forwardRef<SelectElement, SelectProps>((props, forwardedRef) => {
  const formControl = useFormControl();

  const {
    children,
    className,
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
    <StyledSelectWrapper
      {...hoverProps}
      className="manifest-select--wrapper"
      isDisabled={isDisabled}
      isHovered={isHovered}
      isInvalid={isInvalid}
    >
      {startIcon && (
        <StyledSelectIcon
          className="manifest-input--icon__start"
          isInvalid={isInvalid}
          placement="start"
          size={size}
        >
          {startIcon}
        </StyledSelectIcon>
      )}

      <StyledSelect
        {...other}
        aria-describedby={formControl?.hasHelperText ? formControl?.helperTextId : undefined}
        aria-invalid={isInvalid ? true : undefined}
        aria-readonly={isReadOnly || isDisabled ? true : undefined}
        className={cx('manifest-input', className)}
        disabled={isDisabled}
        id={id}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        ref={forwardedRef}
        readOnly={isReadOnly}
        required={isRequired}
        size={size}
      >
        {children}
      </StyledSelect>

      <StyledSelectIcon
        className="manifest-input--icon__start"
        isInvalid={isInvalid}
        placement="end"
        size={size}
      >
        <Icon icon="expand_more" />
      </StyledSelectIcon>
    </StyledSelectWrapper>
  );
});
