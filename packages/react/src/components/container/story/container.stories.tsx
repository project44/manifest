import { Container, ContainerProps } from '../../..';

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: 'radio',
      options: ['large', 'medium', 'small', 'x-large', 'x-small'],
    },
  },
};

export const Default = (args: ContainerProps) => {
  return (
    <Container {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Container>
  );
};

export const MaxWidth = (args: ContainerProps) => {
  return (
    <Container {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Container>
  );
};

MaxWidth.args = {
  maxWidth: 'small',
};

export const Fixed = (args: ContainerProps) => {
  return (
    <Container {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Container>
  );
};

Fixed.args = {
  fixed: true,
};
