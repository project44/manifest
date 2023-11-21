import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledSideNavigationContent } from './SideNavigationContent.styles';
import type {
  SideNavigationContentElement,
  SideNavigationContentProps,
} from './SideNavigationContent.types';

export const SideNavigationContent = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-navigation-content', classNameProp);

  return (
    <StyledSideNavigationContent
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
    >
      {children}
    </StyledSideNavigationContent>
  );
}) as ForwardRefComponent<SideNavigationContentElement, SideNavigationContentProps>;

SideNavigationContent.displayName = 'SideNavigationContent';
