import type * as RadixSeparator from '@radix-ui/react-separator';
import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledSeparator } from './Separator.styles';

export interface SeparatorProps
  extends ManifestProps,
    Omit<RadixSeparator.SeparatorProps, 'orientation'>,
    VariantProps<typeof StyledSeparator> {}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>((props, forwardedRef) => {
  const { className: classNameProp, orientation = 'horizontal', ...other } = props;

  const className = cx(
    'manifest-separator',
    { [`manifest-separator__${orientation}`]: orientation },
    classNameProp,
  );

  return (
    <StyledSeparator
      {...other}
      className={className}
      orientation={orientation}
      ref={forwardedRef}
    />
  );
});
