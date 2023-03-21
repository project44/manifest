import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledBreadcrumb, StyledBreadcrumbList } from './Breadcrumb.styles';
import type { BreadcrumbElement, BreadcrumbProps } from './Breadcrumb.types';

export const Breadcrumb = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-breadcrumb', classNameProp);

  return (
    <StyledBreadcrumb
      {...other}
      ref={forwardedRef}
      aria-label="Breadcrumb"
      as={as}
      className={className}
      css={css}
    >
      <StyledBreadcrumbList className="manifest-breadcrumb__list">{children}</StyledBreadcrumbList>
    </StyledBreadcrumb>
  );
}) as ForwardRefComponent<BreadcrumbElement, BreadcrumbProps>;
