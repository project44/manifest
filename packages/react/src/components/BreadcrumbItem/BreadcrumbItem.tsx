import * as React from 'react';
import { ChevronRight } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Link } from '../Link';
import { StyledBreadcrumbItem } from './BreadcrumbItem.styles';
import type { BreadcrumbItemElement, BreadcrumbItemProps } from './BreadcrumbItem.types';

export const BreadcrumbItem = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, href, ...other } = props;

  const className = cx('manifest-breadcrumb-item', classNameProp);

  return (
    <StyledBreadcrumbItem {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <Link href={href}>{children}</Link>
      <ChevronRight aria-hidden className="manifest-breadcrumb-item__icon" size="small" />
    </StyledBreadcrumbItem>
  );
}) as ForwardRefComponent<BreadcrumbItemElement, BreadcrumbItemProps>;
