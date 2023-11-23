import { createTheme } from '@project44-manifest/react-styles';
import { Meta, Story } from '@storybook/react';
import { Button, Provider, ProviderProps } from '../../..';

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

export const Theme: Story<ProviderProps> = () => {
  const purple = createTheme({
    colors: {
      'primary-default': '#8C18E2',
      'primary-active': '#6500CE',
      'primary-hover': '#7300D3',
      'text-primary': '#FFFFFF',
    },
  });

  return (
    <Provider>
      <div className={purple}>
        <Button>Button</Button>
      </div>
    </Provider>
  );
};

export const NestedThemes: Story<ProviderProps> = () => {
  const green = createTheme({
    colors: {
      'background-primary': '#FAFAFA',
      'primary-default': '#0E864C',
      'primary-active': '#06361E',
      'primary-hover': '#095731',
      'text-primary': '#FFFFFF',
    },
  });

  return (
    <Provider css={{ backgroundColor: '$background-primary', padding: 64 }}>
      <Button>Button</Button>
      <div className={green}>
        <Provider css={{ backgroundColor: '$background-primary', padding: 64 }}>
          <Button>Button</Button>
        </Provider>
      </div>
    </Provider>
  );
};
