import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledStack } from './stack.styles';

/* -------------------------------------------------------------------------------------------------
 * Stack
 * -----------------------------------------------------------------------------------------------*/

type StackElement = 'div';

interface StackProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * The gap between elements in the stack.
   */
  gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * The layout orientation  of the stack.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

const Stack = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, gap, orientation, ...other } = props;

  return (
    <StyledStack
      {...other}
      ref={forwardedRef}
      as={as}
      className={cx('manifest-stack', classNameProp)}
      css={css}
      gap={gap}
      orientation={orientation}
    />
  );
}) as ForwardRefComponent<StackElement, StackProps>;

export type { StackProps };
export { Stack };
