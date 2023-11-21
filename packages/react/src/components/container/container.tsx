import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledContainer } from './container.styles';

/* -------------------------------------------------------------------------------------------------
 * Container
 * -----------------------------------------------------------------------------------------------*/

type ContainerElement = 'div';

interface ContainerProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * Whether the container should adjust its max-width based on the current screen size.
   *
   * @default true
   */
  fixed?: boolean;
  /**
   * The max-width of the container.
   *
   * @default 'large'
   */
  maxWidth?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
}

const Container = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, fixed, maxWidth = 'large', ...other } = props;

  return (
    <StyledContainer
      {...other}
      ref={forwardedRef}
      as={as}
      className={cx('manifest-container', classNameProp)}
      css={css}
      fixed={fixed}
      maxWidth={maxWidth}
    />
  );
}) as ForwardRefComponent<ContainerElement, ContainerProps>;

Container.displayName = 'Container';

export type { ContainerProps };
export { Container };
