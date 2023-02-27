import * as React from 'react';

export interface TableContext {
  isDense?: boolean;
}

export const TableContext = React.createContext<TableContext>({});

export const useTableContext = () => React.useContext(TableContext);
