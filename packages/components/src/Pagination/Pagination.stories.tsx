import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  totalRowCount: 100,
};
