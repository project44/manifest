import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader } from '../../..';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardBody, CardFooter, CardHeader },
};

export const Default = () => (
  <Card>
    <CardHeader>Title</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </CardBody>
    <CardFooter>
      <ButtonGroup>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Cancel</Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
);
