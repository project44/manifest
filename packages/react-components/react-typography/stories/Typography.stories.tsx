import type { ComponentStory } from '@storybook/react';
import { Typography } from '../src';

export default {
  component: Typography,
  title: 'Components/Typography',
};

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Manifesting Project 44 experiences through design.',
};

export const Display = Template.bind({});

Display.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'display',
};

export const Heading = Template.bind({});

Heading.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'heading',
};

export const Title = Template.bind({});

Title.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'title',
};

export const Subtitle = Template.bind({});

Subtitle.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'subtitle',
};

export const Body = Template.bind({});

Body.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'body',
};

export const BodyBold = Template.bind({});

BodyBold.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'bodyBold',
};

export const Subtext = Template.bind({});

Subtext.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'subtext',
};

export const SubtextBold = Template.bind({});

SubtextBold.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'subtextBold',
};

export const Caption = Template.bind({});

Caption.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'caption',
};

export const CaptionBold = Template.bind({});

CaptionBold.args = {
  children: 'Manifesting Project 44 experiences through design.',
  variant: 'captionBold',
};
