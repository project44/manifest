import React, { useEffect, useState } from 'react';
import { CSS } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Button } from '../button';
import { Flex } from '../flex';
import { Tooltip } from '../Tooltip';
import { CountLabel, Variant } from './CountLabel';

export interface NavigationTab {
  label: string;
  count?: number;
  onClick?: () => void;
  toolTip?: string;
}

export interface Props {
  tabs: NavigationTab[];
  defaultActive?: number;
  css?: CSS;
  buttonCss?: CSS;
  activeButtonCss?: CSS;
  counterCss?: CSS;
  isLoading?: boolean;
  activeCountColor?: Variant;
  countColor?: Variant;
  navigationTabsAriaLabel?: string;
}

const activeTabStyle: CSS = {
  background: '$palette-white',
  color: '$background-top-nav',
};

export const NavigationTabs = React.forwardRef((props, forwardedRef) => {
  const {
    tabs,
    defaultActive = 0,
    buttonCss,
    activeButtonCss,
    counterCss,
    isLoading,
    activeCountColor = 'black',
    countColor = 'darkGrey',
    navigationTabsAriaLabel = '', // pass translated aria label for accessibility
  } = props;
  const [activeTab, setActiveTab] = useState(defaultActive);

  useEffect(() => {
    setActiveTab(defaultActive);
  }, [defaultActive]);

  const defaultCss = {
    backgroundColor: '$background-top-nav',
    borderColor: '$palette-grey-200',
    borderRadius: '100px',
    gap: '10px',
    height: '40px',
    maxHeight: 'auto',
    padding: '3px',
    width: 'max-content',
  };

  // override default css with user passed CSS
  const css = {
    ...defaultCss,
    ...props.css,
  };

  return (
    <Flex
      ref={forwardedRef}
      align="center"
      aria-label={navigationTabsAriaLabel}
      css={{
        borderStyle: 'solid',
        borderWidth: '1px',
        alignSelf: 'center',
        ...css,
      }}
      role="group"
    >
      {tabs.map(({ label, count, onClick, toolTip }, index) => {
        const isActive = activeTab === index;
        return (
          <Tooltip
            key={toolTip}
            css={{
              marginLeft: '80px',
              width: '350px',
            }}
            data-testid="navigation-tooltip"
            delay={250}
            placement="bottom"
            title={toolTip}
          >
            <Button
              key={label}
              aria-checked={isActive}
              aria-label={label}
              css={{
                backgroundColor: 'transparent',
                color: '$palette-white',
                justifyContent: 'center',
                borderRadius: '20px',
                minWidth: 120,
                ...(isActive && activeTabStyle),
                '&:focus:after': {
                  boxShadow: 'none',
                  outline: 'none',
                },
                ...buttonCss,
                ...(isActive && activeButtonCss),
              }}
              size="small"
              startIcon={
                isLoading || typeof count === 'number' || typeof count === 'string' ? (
                  <CountLabel
                    css={counterCss}
                    isLoading={isLoading}
                    value={count ?? ''}
                    variant={isActive ? activeCountColor : countColor}
                  />
                ) : undefined
              }
              variant="tertiary"
              // eslint-disable-next-line
              onPress={() => {
                setActiveTab(index);
                onClick?.();
              }}
            >
              {label}
            </Button>
          </Tooltip>
        );
      })}
    </Flex>
  );
}) as ForwardRefComponent<'div', Props>;

NavigationTabs.displayName = 'NavigationTabs';
