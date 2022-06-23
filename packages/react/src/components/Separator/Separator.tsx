import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledSeparator } from './Separator.styles';

type SeparatorElement = React.ElementRef<typeof StyledSeparator>;
type SeparatorNativeProps = React.ComponentPropsWithRef<typeof StyledSeparator>;

export interface SeparatorProps
  extends ManifestProps,
    VariantProps<typeof StyledSeparator>,
    SeparatorNativeProps {}

export const Separator = React.forwardRef<SeparatorElement, SeparatorProps>(
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
