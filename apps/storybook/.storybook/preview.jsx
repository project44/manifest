import { Provider } from '@project44-manifest/react';

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
];

const parameters = {
  decorators: decorators,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default parameters;
