import type { ComponentStory } from '@storybook/react';
import { Tooltip } from '../src';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'radio',
      defaultValue: 'bottom',
      options: ['bottom', 'left', 'right', 'top'],
    },
  },
};

const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip defaultOpen {...args} title="Tooltip">
		<button>Hover Me</button>
	</Tooltip>
);

export const Default = Template.bind({});
