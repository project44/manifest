import * as React from 'react';
import { Button } from '../src/components/Button';
import { toast, Toaster } from '../src/components/Toast';

export default {
  title: 'Components/Toast',
  component: Toaster,
};

export const Default = () => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor');
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Description = () => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Action = () => {
  const handlePress = React.useCallback(() => {
    toast('Lorem ipsum dolor', {
      action: <Button>Refresh Page</Button>,
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Info = () => {
  const handlePress = React.useCallback(() => {
    toast.info('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 100_000,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Success = () => {
  const handlePress = React.useCallback(() => {
    toast.success('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Warning = () => {
  const handlePress = React.useCallback(() => {
    toast.warning('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};

export const Error = () => {
  const handlePress = React.useCallback(() => {
    toast.error('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 10000,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Button onPress={handlePress}>Open Toast</Button>
    </>
  );
};
