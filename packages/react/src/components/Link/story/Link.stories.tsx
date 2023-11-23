import { Link, Typography } from '../../..';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Default = () => <Link href="https://p44design.systems/">Manifest</Link>;

export const Inline = () => (
  <Typography>
    Visit the manifest design system <Link href="https://p44design.systems/">website</Link>
  </Typography>
);
