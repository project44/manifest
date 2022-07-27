import * as React from 'react';
import { cx } from '../../styles';
import { TextFieldBase, TextFieldBaseProps } from '../internal/TextFieldBase';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useStyles } from './TextField.styles';
import { useTextField } from '@react-aria/textfield';

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

  const { className } = useStyles({ size });

  const classes = cx(className, classNameProp, {
    'manifest-textfield': true,
    [`manifest-textfield--${size}`]: size,
  });

  return (
    <TextFieldBase
      {...other}
      className={classes}
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

export { TextField };
export type { TextFieldProps };
