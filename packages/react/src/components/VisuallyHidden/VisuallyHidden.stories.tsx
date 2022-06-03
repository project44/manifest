import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { VisuallyHidden } from './VisuallyHidden';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = args => (
  <VisuallyHidden {...args}>Hidden visually</VisuallyHidden>
);

export const Default = Template.bind({});
