import * as React from 'react';
import { Button, Flex, NavigationTab, NavigationTabs, Tooltip } from '../src';

export default {
  title: 'Components/NavigationTabs',
  component: NavigationTabs,
  subComponents: { Button, Flex, Tooltip },
};

export const Default = () => {
  const tabData: NavigationTab[] = ['creation', 'tracking', 'quality'].map((name) => ({
    label: name,
    toolTip: name,
    onClick: () => {
      // eslint-disable-next-line
      console.log(name);
    },
  }));
  return <NavigationTabs tabs={tabData} />;
};

export const WithCount = () => {
  const style = {
    tabsStyle: {
      backgroundColor: '$palette-grey-200',
      borderColor: '$palette-grey-200',
      borderRadius: '100px',
      gap: '10px',
      height: '40px',
      maxHeight: 'auto',
      padding: '3px',
      width: 'max-content',
    },
    buttonCss: {
      color: '$palette-text-primary',
      height: '32px',
      '&:hover': { backgroundColor: '$palette-grey-300' },
      minWidth: 'none',
      '> span > div > span': { color: '$palette-white' },
    },
    counterCss: {
      h: '20px',
      px: '8px',
    },
  };
  const tabData: NavigationTab[] = ['creation', 'tracking', 'quality'].map((name) => ({
    count: Math.floor(Math.random() * 100),
    label: name,
    toolTip: name,
    onClick: () => {
      // eslint-disable-next-line
      console.log(name);
    },
  }));

  return (
    <NavigationTabs
      activeButtonCss={{
        backgroundColor: '$palette-white !important',
      }}
      activeCountColor="blue"
      buttonCss={style.buttonCss}
      counterCss={style.counterCss}
      css={style.tabsStyle}
      tabs={tabData}
    />
  );
};
