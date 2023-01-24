import { Provider } from '@project44-manifest/react-provider';

export const decorators = [
  (Story) => (
    <Provider>
      <Story />
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
