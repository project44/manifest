import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Manifest',
  href: 'https://p44design.systems/',
};
