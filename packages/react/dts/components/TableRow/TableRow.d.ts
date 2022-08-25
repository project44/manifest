import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface TableRowProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    onMouseEnter?(event: React.MouseEvent<HTMLTableRowElement>): void;
    onMouseLeave?(event: React.MouseEvent<HTMLTableRowElement>): void;
}
declare const TableRow: React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableRowElement>>;
export { TableRow };
export type { TableRowProps };
//# sourceMappingURL=TableRow.d.ts.map