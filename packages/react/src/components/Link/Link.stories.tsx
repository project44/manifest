import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Link } from './Link';
import { Typography } from '../Typography';

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

export const Inline = Template.bind({});

Inline.decorators = [
  () => (
    <Typography>
      Visit the manifest design system <Link href="https://p44design.systems/">webiste</Link>
    </Typography>
  ),
];
