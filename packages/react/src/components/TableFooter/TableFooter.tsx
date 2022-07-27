import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';

type TableFooterElement = React.ElementRef<'tfoot'>;

interface TableFooterProps extends DOMProps, StyleProps {
  /**
   * The rows within the footer.
   */
  children?: React.ReactNode;
}

const TableFooter = React.forwardRef<TableFooterElement, TableFooterProps>(
  ({ className, ...other }, forwardedRef) => (
    <tfoot {...other} className={cx(className, 'manifest-table-footer')} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableFooter.displayName = 'ManifestTableFooter';
}

export { TableFooter };
export type { TableFooterProps };
