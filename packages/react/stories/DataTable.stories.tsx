import { faker } from '@faker-js/faker';
import { ColumnDef, DataTable } from '../src';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

export const Default = () => {
  const data = [...Array.from({ length: 5 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.sex(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'gender',
      accessorKey: 'gender',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'City',
      accessorKey: 'city',
    },
    {
      header: 'State',
      accessorKey: 'state',
    },
    {
      header: 'Zip',
      accessorKey: 'zipCode',
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export const StickyHeader = () => {
  const data = [...Array.from({ length: 100 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    state: faker.address.state(),
    phoneNumber: faker.phone.number(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'State',
      accessorKey: 'state',
    },
    {
      header: 'Phone Number',
      accessorKey: 'phoneNumber',
    },
  ];

  return (
    <DataTable
      enableStickyHeader
      columns={columns}
      data={data}
      initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    />
  );
};

export const StickyHeaderFixedTableHeight = () => {
  const data = [...Array.from({ length: 100 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.streetAddress(),
    state: faker.address.state(),
    phoneNumber: faker.phone.number(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'State',
      accessorKey: 'state',
    },
    {
      header: 'Phone Number',
      accessorKey: 'phoneNumber',
    },
  ];

  return (
    <DataTable
      enableStickyHeader
      columns={columns}
      css={{ '.manifest-data-table__container': { maxHeight: 400 } }}
      data={data}
      initialState={{ pagination: { pageSize: 25, pageIndex: 0 } }}
    />
  );
};

export const ColumnPinning = () => {
  const data = [...Array.from({ length: 100 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Email Address',
      accessorKey: 'email',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'City',
      accessorKey: 'city',
    },
    {
      header: 'State',
      accessorKey: 'state',
    },
  ];

  return (
    <DataTable
      enableStickyHeader
      columns={columns}
      data={data}
      initialState={{ columnPinning: { left: ['email'], right: ['state'] } }}
    />
  );
};

export const RowSelection = () => {
  const data = [...Array.from({ length: 15 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
  ];

  return <DataTable enableRowSelection columns={columns} data={data} />;
};

export const RowExpanding = () => {
  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'Phone Number',
      accessorKey: 'phoneNumber',
    },
  ];

  const data = [...Array.from({ length: 5 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
    phoneNumber: faker.phone.number(),
    subRows: [...Array.from({ length: faker.datatype.number(4) })].map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number(80),
      address: faker.address.streetAddress(),
      phoneNumber: faker.phone.number(),
    })),
  }));

  return <DataTable enableExpanding columns={columns} data={data} />;
};

export const Loading = () => {
  const data = [...Array.from({ length: 100 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
  }));

  const columns: ColumnDef<(typeof data)[0]>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Email Address',
      accessorKey: 'email',
      size: 300,
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'City',
      accessorKey: 'city',
    },
    {
      header: 'State',
      accessorKey: 'state',
    },
  ];

  return <DataTable isLoading columns={columns} data={[]} />;
};
