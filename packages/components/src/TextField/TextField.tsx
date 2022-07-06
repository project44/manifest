import * as React from 'react';
import { cx, useTextFieldStyles } from './TextField.styles';
import { TextFieldBase, TextFieldBaseProps } from '../TextFieldBase';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useTextField } from '@react-aria/textfield';

/**
 * -----------------------------------------------------------------------------------------------
 * TextField
 * -----------------------------------------------------------------------------------------------
 */

type TextFieldElement = React.ElementRef<'div'>;

interface TextFieldProps extends TextFieldBaseProps {
  /**
   * The default value (uncontrolled).
   */
  defaultValue?: string;
  /**
   * Temporary text that occupies the text input when it is empty.
   */
  placeholder?: string;
  /**
   * The size of the combobox
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * The current value (controlled).
   */
  value?: string;
  /**
   * Handler that is called when the value changes.
   */
  onChange?: (value: string) => void;
}

const TextField = React.forwardRef<TextFieldElement, TextFieldProps>((props, forwardedRef) => {
  const {
    className: classNameProp,
    helperTextProps = {},
    inputProps: inputPropsProp = {},
    inputRef,
    labelProps: labelPropsProp = {},
    size = 'medium',
    ...other
  } = props;

  const fieldRef = React.useRef<HTMLInputElement>(null);

  const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
    props,
    fieldRef,
  );

  const { className } = useTextFieldStyles({ size });

  return (
    <TextFieldBase
      {...other}
      className={cx('manifest-textfield', className, classNameProp)}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      inputProps={mergeProps(inputProps, inputPropsProp)}
      inputRef={
        mergeRefs(fieldRef, inputRef as typeof fieldRef) as React.RefObject<HTMLInputElement>
      }
      labelProps={mergeProps(labelProps, labelPropsProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  TextField.displayName = 'ManifestTextField';
}

TextField.toString = () => '.manifest-textField';

export { TextField };
export type { TextFieldProps };
