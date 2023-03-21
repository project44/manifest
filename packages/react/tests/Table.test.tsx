import { render, screen } from '@testing-library/react';
import { Table } from '../src/components/Table';
import { TableBody } from '../src/components/TableBody';
import { TableCell } from '../src/components/TableCell';
import { TableColumn } from '../src/components/TableColumn';
import { TableHeader } from '../src/components/TableHeader';
import { TableRow } from '../src/components/TableRow';

describe('table', () => {
  it('should render', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableColumn>No.</TableColumn>
            <TableColumn isSortable isActive={Boolean(true)} sortDirection="asc" onClick={() => {}}>
              Company name
            </TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>Starbucks</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>002</TableCell>
            <TableCell>Nike</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(screen.getByText('No.')).toBeDefined();
    expect(screen.getByText('Company name')).toBeDefined();
    expect(screen.getByText('001')).toBeDefined();
    expect(screen.getByText('Starbucks')).toBeDefined();
    expect(screen.getByText('002')).toBeDefined();
    expect(screen.getByText('Nike')).toBeDefined();
  });
});
