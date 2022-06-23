import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button } from '../Button';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip {...args}>
    <button>Hover Me</button>
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  title: 'I am a Tooltip!',
};
