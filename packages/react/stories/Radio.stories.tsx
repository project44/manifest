import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Radio, RadioGroup } from '../src';

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
};

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  () => (
    <RadioGroup>
      <Radio value="cats">Cats</Radio>
      <Radio value="dogs">Dogs</Radio>
    </RadioGroup>
  ),
];

export const Disabled = Template.bind({});

Disabled.decorators = [
  () => (
    <RadioGroup>
      <Radio value="cats">Cats</Radio>
      <Radio isDisabled value="dogs">
        Dogs
      </Radio>
    </RadioGroup>
  ),
];

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState('dogs');

    return (
      <RadioGroup value={selected} onChange={setSelected}>
        <Radio value="cats">Cats</Radio>
        <Radio value="dogs">Dogs</Radio>
      </RadioGroup>
    );
  },
];
