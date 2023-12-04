import * as React from 'react';
import { Button, toast, Toaster } from '../../..';
import { ToasterProps } from '../../..';

export default {
  title: 'Components/Toast',
  component: Toaster,
};

export const Default = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor');
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

Default.args = {
  duration: '200',
};

export const Description = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Action = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor', {
      action: <Button>Refresh Page</Button>,
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Info = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast.info('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 100_000,
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Success = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast.success('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Warning = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast.warning('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Error = (args: ToasterProps) => {
  const handlePress = React.useCallback(() => {
    toast.error('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster {...args} />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};
