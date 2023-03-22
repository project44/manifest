import * as React from 'react';
import { DataTable } from '../src';
import type { DataTableColumn } from '../src/components/DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

const columnDefinitions: DataTableColumn[] = [
  { key: 'id', isPinnedLeft: true, header: 'No.', isSortable: true },
  { key: 'name', isPinnedLeft: false, header: 'Company name', isSortable: false },
  { key: 'country', header: 'Country', isSortable: false },
  { key: 'state', header: 'State', isSortable: false },
  { key: 'status', isPinnedRight: true, header: 'Status', isSortable: true },
];

const allRows: Record<string, React.ReactNode>[] = [
  {
    id: '001',
    name: 'Starbucks',
    country: 'United States',
    state: 'Washington',
    status: 'Active',
  },
  {
    id: '002',
    name: 'Nike',
    country: 'Canada',
    state: 'Ottawa',
    status: 'Active',
  },
  { id: '003', name: '09', country: 'The Netherlands', state: 'Eindhoven', status: 'Active' },
  { id: '004', name: '02', country: 'United Kingdom', state: 'London', status: 'Pending' },
  { id: '005', name: 'Paystack', country: 'Kenya', state: 'Nairobi', status: 'Pending' },
  { id: '006', name: 'ING', country: 'Poland', state: 'Warsaw', status: 'Deactivated' },
  { id: '007', name: 'SpaceX', country: 'United States', state: 'California', status: 'Active' },
  {
    id: '008',
    name: 'Virgin Galactic',
    country: 'United States',
    state: 'California',
    status: 'Active',
  },
  { id: '009', name: 'KFC', country: 'United States', state: 'Kentucky', status: 'Active' },
  {
    id: '010',
    name: 'Instagram',
    country: 'United States',
    state: 'California',
    status: 'Deactivated',
  },
  { id: '011', name: 'Subway', country: 'United States', state: 'Connecticut', status: 'Pending' },
  { id: '012', name: 'Dominoes', country: 'United States', state: 'New York', status: 'Active' },
];

const ROWS_PER_PAGE = 6;

export const Default = () => {
  const [columns] = React.useState<DataTableColumn[]>(columnDefinitions);
  const [rows, setRows] = React.useState<Record<string, React.ReactNode>[]>(
    allRows.slice(0, ROWS_PER_PAGE),
  );
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setRows(allRows.slice((page - 1) * ROWS_PER_PAGE, page * ROWS_PER_PAGE));
  }, [page]);

  const handleSort = React.useCallback((column: string, isAscending: boolean) => {
    setRows((prevRows) =>
      prevRows.sort((a, b) => {
        if (String(a[column]) < String(b[column])) {
          return isAscending ? -1 : 1;
        }
        if (String(a[column]) > String(b[column])) {
          return isAscending ? 1 : -1;
        }
        return 0;
      }),
    );
  }, []);

  return (
    <DataTable
      columns={columns}
      currentPage={page}
      rows={rows}
      totalRowCount={allRows.length}
      onPageChange={setPage}
      onSort={handleSort}
    />
  );
};
