import * as React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableColumn } from './TableColumn';
import { TableContainer } from './TableContainer';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import userEvent from '@testing-library/user-event';

describe('@manifest-ui/table', () => {
  it('should pass accessibility', async () => {
    const { container } = render(
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableColumn>Name</TableColumn>
              <TableColumn>Company</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Address</TableColumn>
              <TableColumn>Phone Number</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>123 Fake St.</TableCell>
              <TableCell>Test</TableCell>
              <TableCell>test@test.com</TableCell>
              <TableCell>Tester McTest</TableCell>
              <TableCell>123-456-7890</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter />
      </TableContainer>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should pass accessibility with sort', async () => {
    const { container } = render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableColumn isSortable sortDirection="asc">
              Name
            </TableColumn>
            <TableColumn isActive isSortable sortDirection="desc">
              Company
            </TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn isSortable>Address</TableColumn>
            <TableColumn>Phone Number</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>123 Fake St.</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>Tester McTest</TableCell>
            <TableCell>123-456-7890</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should support hover', async () => {
    const onMouseEnterSpy = jest.fn();
    const onMouseLeaveSpy = jest.fn();

    const container = render(
      <Table onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy} showHover>
        <TableHeader>
          <TableRow>
            <TableColumn>Name</TableColumn>
            <TableColumn>Company</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Address</TableColumn>
            <TableColumn>Phone Number</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>123 Fake St.</TableCell>
            <TableCell>Test</TableCell>
            <TableCell>test@test.com</TableCell>
            <TableCell>Tester McTest</TableCell>
            <TableCell>123-456-7890</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );

    await userEvent.hover(container.getAllByRole('row')[1]);

    expect(onMouseEnterSpy).toHaveBeenCalled();

    await userEvent.unhover(container.getAllByRole('row')[1]);

    expect(onMouseLeaveSpy).toHaveBeenCalled();
  });
});
