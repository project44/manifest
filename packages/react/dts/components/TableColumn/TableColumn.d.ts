import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
declare type Align = 'center' | 'justify' | 'left' | 'right';
declare type TableColumnElement = React.ElementRef<'th'>;
interface TableColumnProps extends DOMProps, StyleProps {
    align?: Align;
    children?: React.ReactNode;
    isActive?: boolean;
    isSortable?: boolean;
    sortDirection?: 'asc' | 'desc';
    onClick?(event: React.MouseEvent<TableColumnElement>): void;
}
declare const TableColumn: React.ForwardRefExoticComponent<TableColumnProps & React.RefAttributes<HTMLTableHeaderCellElement>>;
export { TableColumn };
export type { TableColumnProps };
//# sourceMappingURL=TableColumn.d.ts.map