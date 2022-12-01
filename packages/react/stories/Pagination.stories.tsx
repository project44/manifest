import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Pagination } from '../src';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalRowCount: 100,
};

export const NoNumbers = Template.bind({});

NoNumbers.args = {
  showPageNumbers: false,
  totalRowCount: 100,
};

export const Ranges = Template.bind({});

Ranges.args = {
  boundaries: 2,
  page: 5,
  siblings: 0,
  totalRowCount: 100,
};

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [page, setPage] = React.useState(4);

    return <Pagination page={page} totalRowCount={100} onChange={setPage} />;
  },
];
