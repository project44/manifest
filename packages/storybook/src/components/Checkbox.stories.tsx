import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Checkbox } from '@project44-manifest/react';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Checkbox',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Checkbox',
  isDisabled: true,
};

export const Indetermine = Template.bind({});

Indetermine.args = {
  children: 'Checkbox',
  isIndeterminate: true,
};

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState(false);

    return (
      <Checkbox isSelected={selected} onChange={setSelected}>
        Controlled
      </Checkbox>
    );
  },
];
