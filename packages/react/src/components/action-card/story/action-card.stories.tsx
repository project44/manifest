import type { StoryFn } from '@storybook/react';
import {
  ActionCard,
  ActionCardBody,
  ActionCardHeader,
  ActionCardImage,
  Box,
  Stack,
} from '../../../';

export default {
  title: 'Components/ActionCard',
  component: ActionCard,
  subcomponents: { ActionCardHeader, ActionCardBody, ActionCardImage },
  decorators: [
    (Story: StoryFn) => (
      <Stack gap="medium" orientation="horizontal">
        <Story />
      </Stack>
    ),
  ],
};

export const Size = () => (
  <>
    <Box>
      <ActionCard href="#">
        <ActionCardImage size="large" src="https://picsum.photos/400/600" />
        <ActionCardHeader>Title</ActionCardHeader>
        <ActionCardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </ActionCardBody>
      </ActionCard>
    </Box>
    <Box>
      <ActionCard href="#">
        <ActionCardImage size="small" src="https://picsum.photos/400/600" />
        <ActionCardHeader>Title</ActionCardHeader>
        <ActionCardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </ActionCardBody>
      </ActionCard>
    </Box>
  </>
);

export const WithoutBody = () => (
  <>
    <Box>
      <ActionCard href="#">
        <ActionCardImage size="large" src="https://picsum.photos/400/600" />
        <ActionCardHeader>Title</ActionCardHeader>
      </ActionCard>
    </Box>
    <Box>
      <ActionCard href="#">
        <ActionCardImage size="small" src="https://picsum.photos/400/600" />
        <ActionCardHeader>Title</ActionCardHeader>
      </ActionCard>
    </Box>
  </>
);
