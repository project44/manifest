import { Button } from '@project44-manifest/react-button';
import { Meta, Story } from '@storybook/react';
import { Provider, ProviderProps } from '../src';

const meta: Meta<ProviderProps> = {
  component: Provider,
  title: 'Components/Provider',
};

export default meta;

export const Default: Story<ProviderProps> = () => (
  <Provider>
    <Button>Button</Button>
  </Provider>
);
