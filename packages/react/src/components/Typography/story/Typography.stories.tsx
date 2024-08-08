import { Typography } from '../../..';

export default {
  title: 'Components/Typography',
  component: Typography,
};

export function Default() {
  return <Typography>Lorem ipsum</Typography>;
}

export function Tertiary() {
  return <Typography color="tertiary">Lorem ipsum</Typography>;
}
