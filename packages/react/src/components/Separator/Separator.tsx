import * as React from 'react';
import { AriaLabelingProps, DOMProps, Orientation } from '@react-types/shared';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledSeparator } from './Separator.styles';
import { useSeparator } from '@react-aria/separator';

export interface SeparatorProps extends ManifestProps, DOMProps, AriaLabelingProps {
  /**
   * The axis the separator should align with.
   *
   * @default 'horizontal'
   */
  orientation?: Orientation;
}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>((props, forwardedRef) => {
  const { as, className: classNameProp, css, orientation = 'horizontal', ...other } = props;

  const elementType: keyof JSX.IntrinsicElements = orientation === 'vertical' ? 'div' : 'hr';

  const { separatorProps } = useSeparator({ ...other, elementType });

  const className = cx(
    'manifest-separator',
    { [`manifest-separator__${orientation}`]: orientation },
    classNameProp,
  );

  return (
    <StyledSeparator
      {...separatorProps}
      as={as ?? elementType}
      className={className}
      css={css}
      orientation={orientation}
      ref={forwardedRef}
    />
  );
});
