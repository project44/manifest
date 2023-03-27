import * as React from 'react';

export interface TableContext {
  isDense?: boolean;
  showHover?: boolean;
  onMouseEnter?: (event: React.MouseEvent) => void;
  onMouseLeave?: (event: React.MouseEvent) => void;
}

export const TableContext = React.createContext<TableContext>({});

export const useTableContext = () => React.useContext(TableContext);
