import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Separator } from '../src';

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = args => (
  <section
    style={{
      display: 'flex',
      ...(args.orientation === 'horizontal' ? { flexDirection: 'column' } : {}),
    }}
  >
    <div style={{ padding: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <Separator {...args} />
    <div style={{ padding: '16px' }}>
      Curabitur at facilisis ex, sed lobortis nibh. Fusce aliquam velit et hendrerit ullamcorper.
    </div>
  </section>
);

export const Default = Template.bind({});
