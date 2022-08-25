import * as React from 'react';
export interface TableContext {
    showHover?: boolean;
    onMouseEnter?(event: React.MouseEvent): void;
    onMouseLeave?(event: React.MouseEvent): void;
}
export declare const TableContext: React.Context<TableContext>;
export declare const useTableContext: () => TableContext;
//# sourceMappingURL=Table.context.d.ts.map