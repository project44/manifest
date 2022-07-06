import type { Validation } from '@react-types/shared';
import * as React from 'react';
import { CSS, cx, useFormControlStyles } from './FormControl.styles';
import { Typography } from '../Typography';

/**
 * -----------------------------------------------------------------------------------------------
 * FormControl
 * -----------------------------------------------------------------------------------------------
 */

type FormControlElement = React.ElementRef<'div'>;
type FormControlNativeProps = React.ComponentPropsWithRef<'div'>;

interface FormControlProps extends FormControlNativeProps, Validation {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * Helper text appended to the input element.
   */
  helperText?: React.ReactNode;
  /**
   * Props passed to the helper text element.
   */
  helperTextProps?: React.HTMLAttributes<HTMLElement>;
  /**
   * The label for the form control input element.
   */
  label?: React.ReactNode;
  /**
   * Props passed to the label element.
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * The layout orientation of the form control.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

const FormControl = React.forwardRef<FormControlElement, FormControlProps>(
  (props, forwardedRef) => {
    const {
      children,
      className: classNameProp,
      css,
      helperText,
      helperTextProps = {},
      isRequired,
      label,
      labelProps = {},
      orientation = 'vertical',
      validationState,
      ...other
    } = props;

    const isInvalid = validationState === 'invalid';

    const { className } = useFormControlStyles({ css, isInvalid, orientation });

    return (
      <div
        {...other}
        className={cx('manifest-form-control', className, classNameProp)}
        ref={forwardedRef}
      >
        {label && (
          <label {...labelProps} className="manifest-form-control--label">
            {label}
            {isRequired && (
              <span aria-hidden className="manifest-form-control--required-indicator">
                *
              </span>
            )}
          </label>
        )}

        {children}

        {helperText && (
          <Typography
            {...helperTextProps}
            className="manifest-form-control--helper-text"
            variant="caption"
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  },
);

if (__DEV__) {
  FormControl.displayName = 'ManifestFormControl';
}

FormControl.toString = () => '.manifest-form-control';

export { FormControl };
export type { FormControlProps };
