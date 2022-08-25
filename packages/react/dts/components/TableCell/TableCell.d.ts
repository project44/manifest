import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
declare type Align = 'center' | 'justify' | 'left' | 'right';
interface TableCellProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    align?: Align;
    onMouseEnter?(event: React.MouseEvent<HTMLTableCellElement>): void;
}
declare const TableCell: React.ForwardRefExoticComponent<TableCellProps & React.RefAttributes<HTMLTableDataCellElement>>;
export { TableCell };
export type { TableCellProps };
//# sourceMappingURL=TableCell.d.ts.map