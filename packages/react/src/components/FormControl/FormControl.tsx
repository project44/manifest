import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { FormControlProvider } from './FormControl.context';
import { ManifestProps } from '../../types';
import { StyledFormControl } from './FormControl.styles';

type FormControlElement = React.ElementRef<typeof StyledFormControl>;
type FormControlNativeProps = React.ComponentPropsWithRef<typeof StyledFormControl>;

export interface FormControlProps
  extends ManifestProps,
    VariantProps<typeof StyledFormControl>,
    FormControlNativeProps {
  /**
   * Whether the control is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the control is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the control is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the control is required.
   */
  isRequired?: boolean;
}

export const FormControl = React.forwardRef<FormControlElement, FormControlProps>(
  (props, forwardedRef) => {
    const {
      className,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      orientation = 'vertical',
      ...other
    } = props;

    const id = React.useId();
    const labelId = `${id}-label`;
    const helperTextId = `${id}-helperText`;

    /**
     * Used to determine if we should apply an `aria-describedBy` for the `input`.
     */
    const [hasHelperText, setHasHelperText] = React.useState(false);

    return (
      <FormControlProvider
        hasHelperText={hasHelperText}
        helperTextId={helperTextId}
        id={id}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        labelId={labelId}
        setHasHelperText={setHasHelperText}
      >
        <StyledFormControl
          {...other}
          className={cx('manifest-form-control', className)}
          orientation={orientation}
          ref={forwardedRef}
          role="group"
        />
      </FormControlProvider>
    );
  },
);
