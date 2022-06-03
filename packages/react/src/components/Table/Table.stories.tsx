import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableColumn } from './TableColumn';
import { TableContainer } from './TableContainer';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableCell, TableColumn, TableHeader, TableRow },
  argTypes: {
    showHover: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => {
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [sortedColumn, setSortedColumn] = React.useState('name');

  const handleSort = (column: string) => {
    const isAsc = sortedColumn === column && sortDirection === 'asc';

    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortedColumn(column);
  };

  return (
    <TableContainer>
      <Table {...args}>
        <TableHeader>
          <TableRow>
            <TableColumn>No.</TableColumn>
            <TableColumn
              isActive={sortedColumn === 'name'}
              isSortable
              onClick={() => handleSort('name')}
              sortDirection={sortDirection}
            >
              Company name
            </TableColumn>
            <TableColumn>Country</TableColumn>
            <TableColumn>State</TableColumn>
            <TableColumn
              isActive={sortedColumn === 'status'}
              isSortable
              onClick={() => handleSort('status')}
              sortDirection={sortDirection}
            >
              Status
            </TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>Starbucks</TableCell>
            <TableCell>United States</TableCell>
            <TableCell>Washington</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>002</TableCell>
            <TableCell>Nike</TableCell>
            <TableCell>Canada</TableCell>
            <TableCell>Ottawa</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>003</TableCell>
            <TableCell>09</TableCell>
            <TableCell>The Netherlands</TableCell>
            <TableCell>Eindhoven</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>004</TableCell>
            <TableCell>02</TableCell>
            <TableCell>United Kingdom</TableCell>
            <TableCell>London</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>005</TableCell>
            <TableCell>Paystack</TableCell>
            <TableCell>Kenya</TableCell>
            <TableCell>Nairobi</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>006</TableCell>
            <TableCell>ING</TableCell>
            <TableCell>Poland</TableCell>
            <TableCell>Warsaw</TableCell>
            <TableCell>Deactivated</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Default = Template.bind({});
