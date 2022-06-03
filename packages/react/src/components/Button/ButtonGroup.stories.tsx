import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    isAttached: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button>Save</Button>
      <Button>Cancel</Button>
    </>
  ),
};
