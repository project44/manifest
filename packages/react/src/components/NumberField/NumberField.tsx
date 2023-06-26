import * as React from 'react';
import { useLocale } from '@react-aria/i18n';
import { useNumberField } from '@react-aria/numberfield';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { useNumberFieldState } from '@react-stately/numberfield';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Props } from '../../system';
import {
  NumberFieldBase,
  NumberFieldBaseElement,
  NumberFieldBaseOptions,
} from '../NumberFieldBase';
import { useStyles } from './NumberField.styles';

export interface NumberFieldOptions<T extends As = NumberFieldBaseElement>
  extends NumberFieldBaseOptions<T> {
  /**
   * Use custom locals (en-US, fr-FR, de-DE...)
   */
  customLocale?: string;
  /**
   * The default value (uncontrolled).
   */
  defaultValue?: number;
  /**
   * Formatting options (Intl - ECMAScript Internationalization API)
   */
  formatOptions?: Intl.NumberFormatOptions;
  /**
   * Temporary Number that occupies the Number input when it is empty.
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
  value?: number;
  /**
   * Handler that is called when the value changes.
   */
  onChange?: (value: number) => void;
}

export type NumberFieldProps<T extends As = NumberFieldBaseElement> = Props<NumberFieldOptions<T>>;

export const NumberField = createComponent<NumberFieldOptions>((props, forwardedRef) => {
  const {
    className: classNameProp,
    helperTextProps = {},
    customLocale,
    inputProps: inputPropsProp = {},
    inputRef,
    labelProps: labelPropsProp = {},
    onChange,
    size = 'medium',
    ...other
  } = props;

  const fieldRef = React.useRef<HTMLInputElement>(null);

  const { locale } = useLocale();

  const state = useNumberFieldState({ ...props, locale: customLocale ?? locale });

  const { inputProps, descriptionProps, errorMessageProps, labelProps } = useNumberField(
    { ...props },
    state,
    fieldRef,
  );

  const { className } = useStyles({ size });

  const classes = cx(className, {
    'manifest-textfield': true,
    [`manifest-textfield--${size}`]: size,
  });

  return (
    <NumberFieldBase
      {...other}
      ref={forwardedRef}
      className={classes}
      helperTextProps={mergeProps(descriptionProps, errorMessageProps, helperTextProps)}
      inputProps={mergeProps(inputProps, inputPropsProp)}
      inputRef={
        mergeRefs(fieldRef, inputRef as typeof fieldRef) as React.RefObject<HTMLInputElement>
      }
      labelProps={mergeProps(labelProps, labelPropsProp)}
    />
  );
});
