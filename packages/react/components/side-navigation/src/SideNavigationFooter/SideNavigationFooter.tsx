import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledSideNavigationFooter } from './SideNavigationFooter.styles';
import type {
  SideNavigationFooterElement,
  SideNavigationFooterProps,
} from './SideNavigationFooter.types';

export const SideNavigationFooter = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-navigation-footer', classNameProp);

  return (
    <StyledSideNavigationFooter
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
    >
      {children}
    </StyledSideNavigationFooter>
  );
}) as ForwardRefComponent<SideNavigationFooterElement, SideNavigationFooterProps>;
