import type { CSS } from '@project44-manifest/react-styles';

export type BreadcrumbItemElement = 'li';

export interface BreadcrumbItemProps {
  /**
   * Theme aware style object
   */
  css?: CSS;

  /**
   * Breadcrumb item link href
   */
  href: string;
}
