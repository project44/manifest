import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledFlex } from './flex.styles';

/* -------------------------------------------------------------------------------------------------
 * Flex
 * -----------------------------------------------------------------------------------------------*/

type FlexElement = 'div';

interface FlexProps {
  /**
   * The alignment of the container's children.
   */
  align?: 'baseline' | 'center' | 'end' | 'start';
  /** Theme aware style object */
  css?: CSS;
  /**
   * The gap between rows and columns.
   */
  gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * The justification of the container's children.
   */
  justify?: 'around' | 'between' | 'center' | 'end' | 'start';
  /**
   * The orientation of the container's children.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether the container's should wrap when overflown.
   */
  wrap?: boolean;
}

const Flex = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    align,
    className: classNameProp,
    css,
    gap,
    justify,
    orientation,
    wrap,
    ...other
  } = props;

  return (
    <StyledFlex
      {...other}
      ref={forwardedRef}
      align={align}
      as={as}
      className={cx('manifest-flex', classNameProp)}
      css={css}
      gap={gap}
      justify={justify}
      orientation={orientation}
      wrap={wrap}
    />
  );
}) as ForwardRefComponent<FlexElement, FlexProps>;

Flex.displayName = 'Flex';

export type { FlexProps };
export { Flex };
