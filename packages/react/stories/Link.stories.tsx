import type { ComponentStory } from '@storybook/react';
import { Link, Typography } from '../src';

export default {
  title: 'Components/Link',
  component: Link,
};

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

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
