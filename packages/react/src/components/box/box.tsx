import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledBox } from './box.styles';

/* -------------------------------------------------------------------------------------------------
 * Box
 * -----------------------------------------------------------------------------------------------*/

type BoxElement = 'div';

interface BoxProps {
  /** Theme aware style object */
  css?: CSS;
}

const Box = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, ...other } = props;

  return (
    <StyledBox
      {...other}
      ref={forwardedRef}
      as={as}
      className={cx('manifest-box', classNameProp)}
      css={css}
    />
  );
}) as ForwardRefComponent<BoxElement, BoxProps>;

Box.displayName = 'Box';

export type { BoxProps };
export { Box };
