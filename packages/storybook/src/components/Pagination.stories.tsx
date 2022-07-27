import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Pagination } from '@project44-manifest/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />;

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

    return <Pagination page={page} onChange={setPage} totalRowCount={100} />;
  },
];
