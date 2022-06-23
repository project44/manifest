import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledRadioGroup } from './Radio.styles';

export interface RadioGroupProps
  extends ManifestProps,
    React.ComponentPropsWithoutRef<typeof StyledRadioGroup> {}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof StyledRadioGroup>,
  RadioGroupProps
>((props, forwardedRef) => {
  const { className, orientation = 'vertical', ...other } = props;

  return (
    <StyledRadioGroup
      {...other}
      className={cx('manifest-radio-group', className)}
      orientation={orientation}
      ref={forwardedRef}
    />
  );
});
