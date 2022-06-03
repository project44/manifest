import * as React from 'react';
import { Provider } from '@manifest/react';
import { withPerformance } from 'storybook-addon-performance';

export const decorators = [
  Story => (
    <Provider>
      <Story />
    </Provider>
  ),
  withPerformance,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
