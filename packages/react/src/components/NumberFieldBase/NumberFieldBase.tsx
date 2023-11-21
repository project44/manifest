import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { FocusableProps, ValidationState } from '@react-types/shared';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { FormControl } from '../FormControl';
import { useStyles } from './NumberFieldBase.styles';

export type NumberFieldBaseElement = 'div';

export interface NumberFieldBaseOptions<T extends As = NumberFieldBaseElement>
  extends Options<T>,
    FocusableProps,
    StyleProps {
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
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
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
   * Whether the input should display its "valid" or "invalid" visual styling.
   */
  validationState?: ValidationState;
}

export type NumberFieldBaseProps<T extends As = NumberFieldBaseElement> = Props<
  NumberFieldBaseOptions<T>
>;

export const NumberFieldBase = createComponent<NumberFieldBaseOptions>((props, forwardedRef) => {
  const {
    autoFocus,
    className: classNameProp,
    css,
    helperText,
    helperTextProps,
    inputProps = {},
    inputRef,
    isDisabled,
    isRequired,
    label,
    labelProps,
    validationState,
  } = props;

  const isInvalid = validationState === 'invalid';

  const fieldRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const { focusProps, isFocused, isFocusVisible } = useFocusRing({
    autoFocus,
    isTextInput: true,
  });
  const { isHovered, hoverProps } = useHover({ isDisabled });

  const { className } = useStyles({
    isDisabled,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    css,
  });

  const classes = cx(className, classNameProp, {
    'manifest-numberfield-base': true,
    'manifest-numberfield-base--disabled': isDisabled,
    'manifest-numberfield-base--invalid': isInvalid,
  });

  return (
    <FormControl
      className={classes}
      helperText={helperText}
      helperTextProps={helperTextProps}
      isRequired={isRequired}
      label={label}
      labelProps={labelProps}
      validationState={validationState}
    >
      <div ref={forwardedRef} className="manifest-numberfield-base__wrapper">
        <input
          {...mergeProps(inputProps, focusProps, hoverProps)}
          ref={mergeRefs(fieldRef, inputRef!) as never}
          className="manifest-numberfield-base__input"
        />
      </div>
    </FormControl>
  );
});

NumberFieldBase.displayName = 'NumberFieldBase';
