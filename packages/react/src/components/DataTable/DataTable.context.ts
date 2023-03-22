import * as React from 'react';

export interface DataTableContext {
  isDense?: boolean;
}

export const DataTableContext = React.createContext<DataTableContext>({});

export const useDataTableContext = () => React.useContext(DataTableContext);
