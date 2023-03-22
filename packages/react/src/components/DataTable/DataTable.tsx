import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { DataTableBody } from '../DataTableBody';
import { DataTableCell } from '../DataTableCell';
import { DataTableColumn } from '../DataTableColumn';
import { DataTableContent } from '../DataTableContent';
import { DataTableHeader } from '../DataTableHeader';
import { StyledDataTableOverflowContainer } from '../DataTableOverflowContainer/DataTableOverflowContainer.styles';
import { DataTableRow } from '../DataTableRow';
import { Pagination } from '../Pagination';
import { DataTableContext } from './DataTable.context';
import { StyledDataTable } from './DataTable.styles';
import type { DataTableElement, DataTableProps } from './DataTable.types';

export const DataTable = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    columns,
    css,
    currentPage,
    isDense = false,
    onPageChange,
    onSort,
    rows,
    totalRowCount,
    ...other
  } = props;

  const className = cx('manifest-data-table', classNameProp);

  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const [sortedColumn, setSortedColumn] = React.useState<string>();

  const context = React.useMemo(() => ({ isDense }), [isDense]);

  const handleSort = (column: string) => () => {
    const isAsc = sortedColumn === column && sortDirection === 'asc';

    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortedColumn(column);
    onSort(column, isAsc);
  };

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const numberOfLeftColumns = columns.filter((column) => column.isPinnedLeft).length;
      if (numberOfLeftColumns > 1) {
        // eslint-disable-next-line no-console
        console.warn('Only one column can be pinned left');
      }

      const numberOfRightColumns = columns.filter((column) => column.isPinnedRight).length;
      if (numberOfRightColumns > 1) {
        // eslint-disable-next-line no-console
        console.warn('Only one column can be pinned right');
      }
    }
  }, [columns]);

  return (
    <StyledDataTable {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <DataTableContext.Provider value={context}>
        <StyledDataTableOverflowContainer>
          <DataTableContent>
            <DataTableHeader>
              <DataTableRow>
                {columns.map((column) => (
                  <DataTableColumn
                    key={column.key}
                    isActive={sortedColumn === column.key}
                    isPinnedLeft={column.isPinnedLeft}
                    isPinnedRight={column.isPinnedRight}
                    isSortable={column.isSortable}
                    sortDirection={sortDirection}
                    onClick={column.isSortable ? handleSort(column.key) : undefined}
                  >
                    {column.header}
                  </DataTableColumn>
                ))}
              </DataTableRow>
            </DataTableHeader>
            <DataTableBody>
              {rows.map((row, idx) => (
                <DataTableRow key={`row-${String(idx)}`}>
                  {columns.map((column) => (
                    <DataTableCell
                      key={column.key}
                      isPinnedLeft={column.isPinnedLeft}
                      isPinnedRight={column.isPinnedRight}
                    >
                      {row[column.key]}
                    </DataTableCell>
                  ))}
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </StyledDataTableOverflowContainer>
        <Pagination
          page={currentPage}
          rowsPerPage={rows.length}
          totalRowCount={totalRowCount}
          onChange={onPageChange}
        />
      </DataTableContext.Provider>
    </StyledDataTable>
  );
}) as ForwardRefComponent<DataTableElement, DataTableProps>;
