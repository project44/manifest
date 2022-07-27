import type { DOMProps, StyleProps } from '../../types';
import type { Validation } from '@react-types/shared';
import * as React from 'react';
import { cx } from '../../styles';
import { Typography } from '../Typography';
import { useStyles } from './FormControl.styles';

type FormControlElement = React.ElementRef<'div'>;

interface FormControlProps extends DOMProps, StyleProps, Validation {
  /**
   * The input within the form control.
   */
  children?: React.ReactNode;
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

    const { className } = useStyles({ css, isInvalid, orientation });

    return (
      <div
        {...other}
        className={cx(className, classNameProp, 'manifest-form-control')}
        ref={forwardedRef}
      >
        {label && (
          <label {...labelProps} className="manifest-form-control__label">
            {label}
            {isRequired && (
              <span aria-hidden className="manifest-form-control__required-indicator">
                *
              </span>
            )}
          </label>
        )}

        {children}

        {helperText && (
          <Typography
            {...helperTextProps}
            className="manifest-form-control__helper-text"
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
