import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Calendar } from './Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = args => <Calendar {...args} />;

export const Default = Template.bind({});
