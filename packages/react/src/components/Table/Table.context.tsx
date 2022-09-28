import * as React from 'react';

export interface TableContext {
	showHover?: boolean;
	onMouseEnter?(event: React.MouseEvent): void;
	onMouseLeave?(event: React.MouseEvent): void;
}

export const TableContext = React.createContext<TableContext>({});

export const useTableContext = () => React.useContext(TableContext);
