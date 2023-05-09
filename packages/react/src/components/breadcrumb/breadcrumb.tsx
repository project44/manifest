import * as React from 'react';
import { ChevronRight } from '@project44-manifest/react-icons';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Link } from '../Link';
import { StyledBreadcrumb, StyledBreadcrumbItem, StyledBreadcrumbList } from './breadcrumb.styles';

/* -------------------------------------------------------------------------------------------------
 * Breadcrumb
 * -----------------------------------------------------------------------------------------------*/

type BreadcrumbElement = 'nav';

interface BreadcrumbProps {
  /** Theme aware style object */
  css?: CSS;
}

const Breadcrumb = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-breadcrumb', classNameProp);

  return (
    <StyledBreadcrumb {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <StyledBreadcrumbList className="manifest-breadcrumb__list">{children}</StyledBreadcrumbList>
    </StyledBreadcrumb>
  );
}) as ForwardRefComponent<BreadcrumbElement, BreadcrumbProps>;

/* -------------------------------------------------------------------------------------------------
 * BreadcrumbItem
 * -----------------------------------------------------------------------------------------------*/

type BreadcrumbItemElement = 'li';

interface BreadcrumbItemProps {
  /** Theme aware style object */
  css?: CSS;
  /** Breadcrumb item link href */
  href: string;
}

const BreadcrumbItem = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, href, ...other } = props;

  const className = cx('manifest-breadcrumb-item', classNameProp);

  return (
    <StyledBreadcrumbItem {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <Link href={href}>{children}</Link>
      <ChevronRight aria-hidden className="manifest-breadcrumb-item__icon" size="small" />
    </StyledBreadcrumbItem>
  );
}) as ForwardRefComponent<BreadcrumbItemElement, BreadcrumbItemProps>;

export type { BreadcrumbItemProps, BreadcrumbProps };
export { Breadcrumb, BreadcrumbItem };
