import { Provider } from '@project44-manifest/react';

export const decorators = [
  Story => (
    <Provider>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
};
