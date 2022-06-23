import * as React from 'react';

export interface TableContextOptions {
  showHover?: boolean;
  onMouseEnter?(event: React.MouseEvent): void;
  onMouseLeave?(event: React.MouseEvent): void;
}

export const TableContext = React.createContext<TableContextOptions>({});

export const useTableContext = () => React.useContext(TableContext);
