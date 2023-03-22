import { render, screen } from '@testing-library/react';
import { DataTable } from '../src';

const columns = [
  { key: 'id', isPinnedLeft: true, header: 'No.', isSortable: true },
  { key: 'name', isPinnedLeft: false, header: 'Company name', isSortable: false },
  { key: 'country', header: 'Country', isSortable: false },
  { key: 'state', header: 'State', isSortable: false },
  { key: 'status', isPinnedRight: true, header: 'Status', isSortable: true },
];

const rows = [
  { id: '001', name: 'SpaceX', country: 'USA', state: 'CA', status: 'Active' },
  { id: '002', name: 'Starbucks', country: 'USA', state: 'WA', status: 'Pending' },
];

describe('data-table', () => {
  it('should render', () => {
    render(
      <DataTable
        columns={columns}
        currentPage={1}
        rows={rows}
        totalRowCount={rows.length}
        onPageChange={jest.fn()}
        onSort={jest.fn()}
      />,
    );

    expect(screen.getByText('No.')).toBeDefined();
    expect(screen.getByText('Company name')).toBeDefined();
    expect(screen.getByText('001')).toBeDefined();
    expect(screen.getByText('SpaceX')).toBeDefined();
    expect(screen.getByText('002')).toBeDefined();
    expect(screen.getByText('Starbucks')).toBeDefined();
  });

  it('should call handler on sort', () => {
    const onSort = jest.fn();

    render(
      <DataTable
        columns={columns}
        currentPage={1}
        rows={rows}
        totalRowCount={rows.length}
        onPageChange={jest.fn()}
        onSort={onSort}
      />,
    );

    screen.getByText('No.').click();

    expect(onSort).toHaveBeenCalled();
  });

  it('should call handler on pagination', () => {
    const onPageChange = jest.fn();

    render(
      <DataTable
        columns={columns}
        currentPage={100}
        rows={rows}
        totalRowCount={rows.length}
        onPageChange={onPageChange}
        onSort={jest.fn()}
      />,
    );

    screen.getByLabelText('Go to next page').click();

    expect(onPageChange).toHaveBeenCalled();
  });
});
