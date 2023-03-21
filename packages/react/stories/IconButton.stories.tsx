import type { ComponentStory } from '@storybook/react';
import { IconButton } from '../src';

export default {
  title: 'Components/IconButton',
  component: IconButton,
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <i className="material-icons">add</i>
  </IconButton>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: 'tertiary',
};

export const Danger = Template.bind({});

Danger.args = {
  variant: 'danger',
};

export const Brand = Template.bind({});

Brand.args = {
  variant: 'brand',
};

export const Medium = Template.bind({});

Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
};
