import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledNavigation } from './LocalNavigation.styles';

export interface LocalNavigationProps {
  /** Theme aware style object */
  css?: CSS;
}

export const LocalNavigation = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-local-navigation', classNameProp);

  return <StyledNavigation {...other} ref={forwardedRef} as={as} className={className} css={css} />;
}) as ForwardRefComponent<'div', LocalNavigationProps>;
