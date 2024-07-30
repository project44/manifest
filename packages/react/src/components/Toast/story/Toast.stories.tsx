import * as React from 'react';
import { Button, ButtonGroup, Flex, toast, Toaster, ToasterProps, ToastPosition } from '../../..';

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

export const Positioning = (args: ToasterProps) => {
  const handlePress = (position: ToastPosition): void => {
    toast.info('Lorem ipsum dolor', {
      description:
        'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      duration: 1000,
      position,
    });
  };

  const handleTopLeft = React.useCallback(() => {
    handlePress('top-left');
  }, []);
  const handleTopCenter = React.useCallback(() => {
    handlePress('top-center');
  }, []);
  const handleTopRight = React.useCallback(() => {
    handlePress('top-right');
  }, []);
  const handleBottomLeft = React.useCallback(() => {
    handlePress('bottom-left');
  }, []);
  const handleBottomCenter = React.useCallback(() => {
    handlePress('bottom-center');
  }, []);
  const handleBottomRight = React.useCallback(() => {
    handlePress('bottom-right');
  }, []);

  return (
    <Flex css={{ width: 600, height: 400 }}>
      <Toaster {...args} />
      <Flex>
        <ButtonGroup>
          <Button onPress={handleTopLeft}>top-left</Button>
          <Button onPress={handleTopCenter}>top-center</Button>
          <Button onPress={handleTopRight}>top-right</Button>
          <Button onPress={handleBottomLeft}>bottom-left</Button>
          <Button onPress={handleBottomCenter}>bottom-center</Button>
          <Button onPress={handleBottomRight}>bottom-right</Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};
