import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';

type TableHeaderElement = React.ElementRef<'thead'>;

interface TableHeaderProps extends DOMProps, StyleProps {
  /**
   * The rows within the header.
   */
  children?: React.ReactNode;
}

const TableHeader = React.forwardRef<TableHeaderElement, TableHeaderProps>(
  ({ className, ...other }, forwardedRef) => (
    <thead {...other} className={cx(className, 'manifest-table-header')} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableHeader.displayName = 'ManifestTableHeader';
}

export { TableHeader };
export type { TableHeaderProps };
