import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { Switch } from '../../..';

export default {
  title: 'Components/Switch',
  component: Switch,
};

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Switch',
};

export const Small = Template.bind({});

Small.args = {
  children: 'Switch',
  size: 'small',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Switch',
  isDisabled: true,
};

export const Controlled = Template.bind({});

Controlled.decorators = [
  () => {
    const [selected, setSelected] = React.useState(false);

    return (
      <Switch isSelected={selected} onChange={setSelected}>
        Controlled
      </Switch>
    );
  },
];
