import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledSeparator } from './Separator.styles';

export interface SeparatorProps
  extends ManifestProps,
    React.ComponentPropsWithoutRef<typeof StyledSeparator>,
    VariantProps<typeof StyledSeparator> {}

export const Separator = React.forwardRef<React.ElementRef<typeof StyledSeparator>, SeparatorProps>(
  (props, forwardedRef) => {
    const { className, orientation = 'horizontal', ...other } = props;

    return (
      <StyledSeparator
        {...other}
        className={cx('manifest-separator', className)}
        orientation={orientation}
        ref={forwardedRef}
      />
    );
  },
);
