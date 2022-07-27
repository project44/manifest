import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Icon } from '@project44-manifest/react';

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'face',
};

export const CustomSize = Template.bind({});

CustomSize.args = {
  css: { fontSize: 14 },
  icon: 'face',
};
