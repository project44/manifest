import { Link, LinkProps, Typography } from '../../..';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Default = (args: LinkProps) => <Link {...args}>Manifest</Link>;

Default.args = {
  href: 'https://p44design.systems/',
};

export const Inline = (args: LinkProps) => (
  <Typography>
    Visit the manifest design system <Link {...args}>website</Link>
  </Typography>
);

Inline.args = {
  href: 'https://p44design.systems/',
};
