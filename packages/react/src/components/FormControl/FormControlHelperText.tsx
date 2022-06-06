import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { StyledFormControlHelperText } from './FormControl.styles';
import { useFormControl } from './FormControl.context';
import { useMergedRefs } from '../../hooks';

type FormControlHelperTextElement = React.ElementRef<typeof StyledFormControlHelperText>;
type FormControlHelperTextNativeProps = React.ComponentPropsWithRef<
  typeof StyledFormControlHelperText
>;

export interface FormControlHelperTextProps
  extends VariantProps<typeof StyledFormControlHelperText>,
    Omit<FormControlHelperTextNativeProps, 'variant'> {}

export const FormControlHelperText = React.forwardRef<
  FormControlHelperTextElement,
  FormControlHelperTextProps
>((props, forwardedRef) => {
  const { className, ...other } = props;

  const formControl = useFormControl();

  const mergedRef = useMergedRefs(forwardedRef, node => {
    if (!node) return;

    formControl?.setHasHelperText?.(true);
  });

  return (
    <StyledFormControlHelperText
      {...other}
      className={cx('manifest-form-control--helper-text', className)}
      id={formControl?.helperTextId}
      isInvalid={formControl?.isInvalid}
      ref={mergedRef}
      variant="caption"
    />
  );
});
