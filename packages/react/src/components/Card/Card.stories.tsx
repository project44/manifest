import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '.';
import { Button, ButtonGroup } from '../Button';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { CardBody, CardFooter, CardHeader },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <CardHeader>Title</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant="secondary">Cancel</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </CardFooter>
    </>
  ),
};
