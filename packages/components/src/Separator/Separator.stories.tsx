import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Flex } from '../Flex';
import { Separator } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = args => <Separator {...args} />;

export const Default = Template.bind({});

export const Vertical = Template.bind({});

Vertical.decorators = [
  () => (
    <Flex css={{ size: 50 }}>
      <Separator orientation="vertical" />
    </Flex>
  ),
];
