import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Icon } from '../Icon';
import { Toast } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const Multiline = Template.bind({});
Multiline.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
};

export const SuccessCustom = Template.bind({});
SuccessCustom.args = {
  children: (
    <div style={{ display: 'flex', cursor: 'pointer' }} onClick={() => alert('Clicked')}>
      <Icon icon="checkmark" style={{ width: '30px' }} />
      <span>
        <b>Action finished successfully</b> <br />
        <em>click me for additional details</em> <br />
        <em>click me for details</em> <br />
      </span>
    </div>
  ),
  variant: 'success',
  isDissmissable: false,
  actions: [{ title: 'UNDO', callback: () => alert('UNDO clicked') }],
  css: { width: 600 },
};

export const ErrorWithAutoDismiss = Template.bind({});
ErrorWithAutoDismiss.args = {
  children: 'Something went wrong',
  isDissmissable: false,
  variant: 'error',
  timeout: 2000,
};

export const WarningWithActions = Template.bind({});
WarningWithActions.args = {
  children: 'Some test warning',
  variant: 'warning',
  actions: [
    { title: 'UNDO', callback: () => alert('UNDO clicked') },
    { title: 'HELP', callback: () => alert('HELP clicked') },
  ],
};
