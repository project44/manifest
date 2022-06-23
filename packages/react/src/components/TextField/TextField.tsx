import type { AriaTextFieldProps } from '@react-types/textfield';
import type { ManifestProps } from '../../types';
import type { PressEvents } from '@react-types/shared';
import * as React from 'react';
import { StyledInput, StyledIcon } from './TextField.styles';
import { cx } from '../../styles';
import { Flex } from '../Flex';
import { FormControl } from '../FormControl';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTextField } from '@react-aria/textfield';

type TextFieldAriaProps = AriaTextFieldProps & PressEvents;
type TextFieldElement = React.ElementRef<typeof StyledInput>;
type TextFieldNativeProps = Omit<
  React.ComponentPropsWithoutRef<typeof StyledInput>,
  keyof TextFieldAriaProps
>;

export interface TextFieldProps extends ManifestProps, TextFieldNativeProps, TextFieldAriaProps {
  /**
   * Icon displayed at the end of the text field.
   */
  endIcon?: React.ReactNode;
  /**
   * Helper text to append to the form control input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Label of the input element
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label.
   */
  labelProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * Icon displayed at the start of the text field.
   */
  startIcon?: React.ReactNode;
}

export const TextField = React.forwardRef<TextFieldElement, TextFieldProps>(
  (props, forwardedRef) => {
    const {
      as,
      autoFocus,
      className,
      css,
      endIcon,
      isDisabled,
      helperText,
      helperTextProps: helperTextPropsProp = {},
      label,
      labelProps: labelPropsProp = {},
      validationState,
      size = 'medium',
      startIcon,
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);

    const isInvalid = validationState === 'invalid';

    const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
      props,
      inputRef,
    );

    const { hoverProps, isHovered } = useHover({ isDisabled });
    const { isFocusVisible, focusProps } = useFocusRing({ autoFocus, isTextInput: true });

    return (
      <FormControl
        helperText={helperText}
        helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
        label={label}
        labelProps={mergeProps(labelProps, labelPropsProp)}
      >
        <Flex
          className="manifest-text-field"
          css={{ minWidth: '3rem', position: 'relative', width: '100%' }}
        >
          {startIcon && (
            <StyledIcon
              className="manifest-text-field--icon__start"
              isInvalid={isInvalid}
              placement="start"
              size={size}
            >
              {startIcon}
            </StyledIcon>
          )}

          <StyledInput
            {...mergeProps(inputProps, focusProps, hoverProps)}
            as={as}
            className={cx('manifest-text-field--input', className)}
            css={css}
            hasEndIcon={!!endIcon}
            hasStartIcon={!!startIcon}
            isInvalid={isInvalid}
            isHovered={isHovered}
            isFocusVisible={isFocusVisible}
            ref={forwardedRef}
            size={size}
          />

          {endIcon && (
            <StyledIcon
              className="manifest-text-field--icon__end"
              isInvalid={isInvalid}
              placement="end"
              size={size}
            >
              {endIcon}
            </StyledIcon>
          )}
        </Flex>
      </FormControl>
    );
  },
);
