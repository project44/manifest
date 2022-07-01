import type { AriaTextFieldProps } from '@react-types/textfield';
import type { PressEvents } from '@react-types/shared';
import * as React from 'react';
import { CSS, cx, useTextFieldStyles } from './TextField.styles';
import { FormControl } from '../FormControl';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTextField } from '@react-aria/textfield';

/**
 * -----------------------------------------------------------------------------------------------
 * TextField
 * -----------------------------------------------------------------------------------------------
 */

type TextFieldAriaProps = AriaTextFieldProps & PressEvents;
type TextFieldElement = React.ElementRef<'div'>;
type TextFieldNativeProps = Omit<React.ComponentPropsWithoutRef<'div'>, keyof TextFieldAriaProps>;

interface TextFieldProps extends TextFieldNativeProps, TextFieldAriaProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
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
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon displayed at the start of the text field.
   */
  startIcon?: React.ReactNode;
}

const TextField = React.forwardRef<TextFieldElement, TextFieldProps>((props, forwardedRef) => {
  const {
    autoFocus,
    className: classNameProp,
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
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({ autoFocus, isTextInput: true });

  const { className } = useTextFieldStyles({
    hasEndIcon: !!endIcon,
    hasStartIcon: !!startIcon,
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    size,
    css,
  });

  return (
    <FormControl
      helperText={helperText}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextPropsProp)}
      label={label}
      labelProps={mergeProps(labelProps, labelPropsProp)}
      validationState={validationState}
    >
      <div className={cx('manifest-text-field', className, classNameProp)} ref={forwardedRef}>
        {startIcon && (
          <span className={cx('manifest-text-field--icon', 'manifest-text-field--icon__start')}>
            {startIcon}
          </span>
        )}

        <input
          {...mergeProps(inputProps, focusProps, hoverProps)}
          className="manifest-text-field--input"
          ref={inputRef}
        />

        {endIcon && (
          <span className={cx('manifest-text-field--icon', 'manifest-text-field--icon__end')}>
            {endIcon}
          </span>
        )}
      </div>
    </FormControl>
  );
});

if (__DEV__) {
  TextField.displayName = 'ManifestTextField';
}

TextField.toString = () => '.manifest-textField';

export { TextField };
export type { TextFieldProps };
