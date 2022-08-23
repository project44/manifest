import { Provider } from '../src';

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
