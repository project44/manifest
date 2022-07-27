import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';

type TableBodyElement = React.ElementRef<'tbody'>;

interface TableBodyProps extends DOMProps, StyleProps {
  /**
   * The rows within the body.
   */
  children?: React.ReactNode;
}

const TableBody = React.forwardRef<TableBodyElement, TableBodyProps>(
  ({ className, ...other }, forwardedRef) => (
    <tbody {...other} className={cx(className, 'manifest-table-body')} ref={forwardedRef} />
  ),
);

if (__DEV__) {
  TableBody.displayName = 'ManifestTableBody';
}

export { TableBody };
export type { TableBodyProps };
