import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { TableContext } from './Table.context';
interface TableProps extends DOMProps, StyleProps, TableContext {
    children?: React.ReactNode;
}
declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export { Table };
export type { TableProps };
//# sourceMappingURL=Table.d.ts.map