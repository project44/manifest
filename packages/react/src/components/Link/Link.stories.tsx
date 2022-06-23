import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './Link';

export default {
  component: Link,
  title: 'Components/Link',
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Link',
  href: 'https://p44design.systems/27d9b4710/p/0572a8-manifest-ui',
};
