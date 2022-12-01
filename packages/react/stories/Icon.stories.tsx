import type { ComponentStory } from '@storybook/react';
import { Icon } from '../src';

export default {
  title: 'Components/Icon',
  component: Icon,
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'face',
};

export const CustomSize = Template.bind({});

CustomSize.args = {
  css: { fontSize: 14 },
  icon: 'face',
};
