import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { FormControl } from '../FormControl';
import { FormControlHelperText } from '../FormControlHelperText';
import { FormControlLabel } from '../FormControlLabel';
import { Input } from '../../Input';

export default {
  title: 'Components/FormControl',
  component: FormControl,
  subcomponents: { FormControlHelperText, FormControlLabel },
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = args => (
  <FormControl {...args}>
    <FormControlLabel>FormControl</FormControlLabel>
    <Input placeholder="Input" />
    <FormControlHelperText>This is helper text</FormControlHelperText>
  </FormControl>
);

export const Default = Template.bind({});
