import type { FocusableProps, ValidationState } from '@react-types/shared';
import * as React from 'react';
import { CSS, cx, useTextFieldBaseStyles } from './TextFieldBase.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { FormControl } from '../FormControl';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';

/**
 * -----------------------------------------------------------------------------------------------
 * TextFieldBase
 * -----------------------------------------------------------------------------------------------
 */

type TextFieldBaseElement = React.ElementRef<'div'>;

interface TextFieldBaseProps extends FocusableProps {
  /**
   * Classname appended to the root element.
   */
  className?: string;
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
   * The ref passed to the input element.
   */
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * Props passed to the input element.
   */
  inputProps?:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  /**
   * Whether the input is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the input can be selected but not changed by the user.
   */
  isReadOnly?: boolean;
  /**
   * Whether user input is required on the input before form submission.
   */
  isRequired?: boolean;
  /**
   * Label of the input element
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label.
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Whether the textfield should support multiline input (textarea).
   */
  multiline?: boolean;
  /**
   * Icon displayed at the start of the text field.
   */
  startIcon?: React.ReactNode;
  /**
   * Whether the input should display its "valid" or "invalid" visual styling.
   */
  validationState?: ValidationState;
}

const TextFieldBase = React.forwardRef<TextFieldBaseElement, TextFieldBaseProps>(
  (props, forwardedRef) => {
    const {
      autoFocus,
      className: classNameProp,
      css,
      endIcon,
      helperText,
      helperTextProps,
      inputProps = {},
      inputRef,
      isDisabled,
      isRequired,
      label,
      labelProps,
      multiline = false,
      startIcon,
      validationState,
    } = props;

    const Comp = multiline ? 'textarea' : 'input';
    const isInvalid = validationState === 'invalid';

    const fieldRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    const { focusProps, isFocused, isFocusVisible } = useFocusRing({
      autoFocus,
      isTextInput: true,
    });
    const { isHovered, hoverProps } = useHover({ isDisabled });

    const { className } = useTextFieldBaseStyles({
      hasEndIcon: !!endIcon,
      hasStartIcon: !!startIcon,
      isDisabled,
      isFocused,
      isFocusVisible,
      isHovered,
      isInvalid,
      css,
    });

    return (
      <FormControl
        helperText={helperText}
        helperTextProps={helperTextProps}
        isRequired={isRequired}
        label={label}
        labelProps={labelProps}
        validationState={validationState}
      >
        <div className={cx('manifest-textfield-base', className, classNameProp)} ref={forwardedRef}>
          {startIcon && (
            <span
              className={cx(
                'manifest-textfield-base--icon',
                'manifest-textfield-base--icon__start',
              )}
            >
              {startIcon}
            </span>
          )}

          <Comp
            {...mergeProps(inputProps, focusProps, hoverProps)}
            className="manifest-textfield-base--input"
            ref={mergeRefs(fieldRef, inputRef as typeof fieldRef) as any}
            rows={multiline ? 1 : undefined}
          />

          {endIcon && (
            <span
              className={cx('manifest-textfield-base--icon', 'manifest-textfield-base--icon__end')}
            >
              {endIcon}
            </span>
          )}
        </div>
      </FormControl>
    );
  },
);

if (__DEV__) {
  TextFieldBase.displayName = 'ManifestTextFieldBase';
}

TextFieldBase.toString = () => '.manifest-textfield-base';

export { TextFieldBase };
export type { TextFieldBaseProps };
