import { faker } from '@faker-js/faker';
import { ClipboardWithCheck, Clock } from '@project44-manifest/react-icons';
import { createDataTableColumnHelper, DataTable, DataTableColumnDef, Link, Pill } from '../src';
import { TotalsDataObj } from '../src/components/DataTable/DataTable.types';

export default {
  title: 'Components/DataTable',
  component: DataTable,
};

export const Default = () => {
  interface Person {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    address: string;
    city: string;
    isSubscribed: boolean;
    birthday: string;
  }
  const data = [...Array.from({ length: 5 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.sex(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    isSubscribed: faker.datatype.boolean(),
    birthday: faker.date.past().toLocaleDateString('en-US'),
  }));

  const columns: DataTableColumnDef<Person>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
      footer: (props) => props.column.id,
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
      footer: (props) => props.column.id,
    },
    {
      header: 'Gender',
      accessorKey: 'gender',
      footer: (props) => props.column.id,
    },
    {
      header: 'Age',
      accessorKey: 'age',
      footer: (props) => props.column.id,
    },
    {
      header: 'Address',
      accessorKey: 'address',
      footer: (props) => props.column.id,
    },
    {
      header: 'City',
      accessorKey: 'city',
      footer: (props) => props.column.id,
    },
    {
      header: 'Subscribed',
      accessorKey: 'isSubscribed',
      footer: (props) => props.column.id,
    },
    {
      header: 'Birthday',
      accessorKey: 'birthday',
      footer: (props) => props.column.id,
    },
  ];

  return <DataTable columns={columns} data={data} />;
};

export const CustomCellRendering = () => {
  interface Shipment {
    shipmentId: string;
    status: string;
    carrier: string;
    rate: string;
    origin: string;
    destination: string;
    pickupDate: string;
  }

  const columnHelper = createDataTableColumnHelper<Shipment>();

  const data = [...Array.from({ length: 5 })].map(() => ({
    shipmentId: faker.random.numeric(6),
    status: faker.helpers.arrayElement(['Pending', 'Booked']),
    carrier: `${faker.name.firstName()}'s Trucking`,
    rate: faker.commerce.price(),
    origin: faker.address.city(),
    destination: faker.address.state(),
    pickupDate: faker.date.future().toLocaleDateString('en-US'),
  }));

  const columns = [
    columnHelper.accessor('shipmentId', {
      header: 'Shipment ID',
      // eslint-disable-next-line react/no-unstable-nested-components
      cell: (id) => <Link href="#">{id.getValue()}</Link>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      // eslint-disable-next-line react/no-unstable-nested-components
      cell: (status) =>
        status.getValue() === 'Pending' ? (
          <Pill colorScheme="red" icon={<Clock />} label={status.getValue()} />
        ) : (
          <Pill colorScheme="indigo" icon={<ClipboardWithCheck />} label={status.getValue()} />
        ),
    }),
    {
      header: 'Carrier',
      accessorKey: 'carrier',
    },
    columnHelper.accessor('rate', {
      id: 'rate',
      header: 'Rate',
      // eslint-disable-next-line react/no-unstable-nested-components
      cell: (rate) => <span>${rate.getValue()}</span>,
    }),
    {
      header: 'Origin',
      accessorKey: 'origin',
    },
    {
      header: 'Destination',
      accessorKey: 'destination',
    },
    {
      header: 'Pickup Date',
      accessorKey: 'pickupDate',
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

  const columns: DataTableColumnDef<(typeof data)[0]>[] = [
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

  const columns: DataTableColumnDef<(typeof data)[0]>[] = [
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
    name: faker.name.fullName(),
    age: faker.datatype.number(100),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    isSubscribed: faker.datatype.boolean(),
    city: faker.address.city(),
    state: faker.address.state(),
    birthday: faker.date.past().toLocaleDateString('en-US'),
  }));

  const columns: DataTableColumnDef<(typeof data)[0]>[] = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Age',
      accessorKey: 'age',
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
      header: 'Subscribed',
      accessorKey: 'isSubscribed',
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
      header: 'Birthday',
      accessorKey: 'birthday',
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

  const columns: DataTableColumnDef<(typeof data)[0]>[] = [
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
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    phoneNumber: string;
  }
  const columns: DataTableColumnDef<Person>[] = [
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
  interface Person {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
  }

  const columns: DataTableColumnDef<Person>[] = [
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

export const TotalFooterRow = () => {
  interface Person {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    address: string;
    city: string;
    isSubscribed: boolean;
    birthday: string;
  }
  const data = [...Array.from({ length: 5 })].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    gender: faker.name.sex(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    isSubscribed: faker.datatype.boolean(),
    birthday: faker.date.past().toLocaleDateString('en-US'),
  }));

  const columns: DataTableColumnDef<Person>[] = [
    {
      header: 'First Name',
      accessorKey: 'firstName',
    },
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Gender',
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
      header: 'Subscribed',
      accessorKey: 'isSubscribed',
    },
    {
      header: 'Birthday',
      accessorKey: 'birthday',
    },
  ];

  const totalsObj: TotalsDataObj = {
    firstName: {
      value: 0.572284,
      hasCustomHtml: false,
      html: '57.2%',
      links: [
        {
          url: false,
        },
      ],
    },
    lastName: {
      value: 0.572284,
      hasCustomHtml: false,
      html: '57.2%',
      links: [
        {
          url: false,
        },
      ],
    },
    gender: {
      value: -0.148,
      hasCustomHtml: false,
      html: '-0.1 p.p.',
      links: [
        {
          url: false,
        },
      ],
    },
    age: {
      value: 0.062509,
      hasCustomHtml: false,
      html: '6.3%',
      links: [
        {
          url: false,
        },
      ],
    },
    address: {
      value: 0.317,
      hasCustomHtml: false,
      html: '0.3 p.p.',
      links: [
        {
          url: false,
        },
      ],
    },
    city: {
      value: 0.064555,
      hasCustomHtml: false,
      html: '6.5%',
      links: [
        {
          url: false,
        },
      ],
    },
    isSubscribed: {
      value: 0.3123,
      hasCustomHtml: false,
      html: '0.3 p.p.',
      links: [
        {
          url: false,
        },
      ],
    },
    birthday: {
      value: 0.005304,
      hasCustomHtml: false,
      html: '0.5%',
      links: [
        {
          url: false,
        },
      ],
    },
  };

  const totalsData = totalsObj;
  const totalsKeyword = 'SUMMARY';

  const getTotalValue = (
    headerTotalObj: TotalsDataObj,
    headerId: number | string,
    index: number,
    keyword: number,
  ) => {
    if (headerTotalObj !== undefined) {
      if (
        (headerTotalObj[headerId] === undefined && headerTotalObj[headerId].value === undefined) ||
        index === 0
      ) {
        return keyword;
      }

      return headerTotalObj[headerId].value;
    }
    return '';
  };
  const footerObj = {
    data: totalsData,
    keyword: totalsKeyword,
    callBackFunc: getTotalValue,
  };

  return (
    <DataTable columns={columns} data={data} enablePagination={false} footerProps={footerObj} />
  );
};
