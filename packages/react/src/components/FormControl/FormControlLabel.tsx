import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledFormControlLabel, StyledRequiredIndicator } from './FormControl.styles';
import { useFormControl } from './FormControl.context';

type FormControlLabelElement = React.ElementRef<typeof StyledFormControlLabel>;
type FormControlLabelNativeProps = React.ComponentPropsWithRef<typeof StyledFormControlLabel>;

export interface FormControlLabelProps
  extends ManifestProps,
    VariantProps<typeof StyledFormControlLabel>,
    FormControlLabelNativeProps {}

export const FormControlLabel = React.forwardRef<FormControlLabelElement, FormControlLabelProps>(
  (props, forwardedRef) => {
    const { children, className, ...other } = props;

    const formControl = useFormControl();

    return (
      <StyledFormControlLabel
        {...other}
        className={cx('manifest-form-control--label', className)}
        htmlFor={formControl?.id}
        id={formControl?.labelId}
        ref={forwardedRef}
      >
        {children}
        {formControl?.isRequired && (
          <StyledRequiredIndicator aria-hidden role="presentation">
            *
          </StyledRequiredIndicator>
        )}
      </StyledFormControlLabel>
    );
  },
);
