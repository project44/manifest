import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '../src';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableBody, TableCell, TableColumn, TableHeader, TableRow },
};

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => {
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
    const [sortedColumn, setSortedColumn] = React.useState('name');

    const handleSort = (column: string) => () => {
      const isAsc = sortedColumn === column && sortDirection === 'asc';

      setSortDirection(isAsc ? 'desc' : 'asc');
      setSortedColumn(column);
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableColumn>No.</TableColumn>
            <TableColumn
              isSortable
              isActive={sortedColumn === 'name'}
              sortDirection={sortDirection}
              onClick={handleSort('name')}
            >
              Company name
            </TableColumn>
            <TableColumn>Country</TableColumn>
            <TableColumn>State</TableColumn>
            <TableColumn
              isSortable
              isActive={sortedColumn === 'status'}
              sortDirection={sortDirection}
              onClick={handleSort('status')}
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
    );
  },
];

export const RowHover = Template.bind({});

RowHover.decorators = [
  () => (
    <Table showHover>
      <TableHeader>
        <TableRow>
          <TableColumn>No.</TableColumn>
          <TableColumn>Company name</TableColumn>
          <TableColumn>Country</TableColumn>
          <TableColumn>State</TableColumn>
          <TableColumn>Status</TableColumn>
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
  ),
];
