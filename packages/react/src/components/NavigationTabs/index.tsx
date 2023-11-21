import React, { useEffect, useState } from 'react';
import * as designTokens from '@project44-manifest/design-tokens';
import { CSS } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Button } from '../button';
import { Flex } from '../flex';
import { Tooltip } from '../Tooltip';
import { CountLabel } from './CountLabel';

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
  activeCountColor?:
    | 'black'
    | 'blue'
    | 'darkBlue'
    | 'darkGrey'
    | 'default'
    | 'grey'
    | 'lightGrey'
    | 'red';
  countColor?:
    | 'black'
    | 'blue'
    | 'darkBlue'
    | 'darkGrey'
    | 'default'
    | 'grey'
    | 'lightGrey'
    | 'red';
}

const activeTabStyle: CSS = {
  background: designTokens.colorPaletteWhite,
  color: designTokens.colorBackgroundTopNav,
};

export const NavigationTabs = React.forwardRef((props, forwardedRef) => {
  const {
    tabs,
    defaultActive = 0,
    css,
    buttonCss,
    activeButtonCss,
    counterCss,
    isLoading,
    activeCountColor = 'black',
    countColor = 'darkGrey',
  } = props;
  const [activeTab, setActiveTab] = useState(defaultActive);

  useEffect(() => void setActiveTab(defaultActive), [defaultActive]);

  return (
    <Flex
      ref={forwardedRef}
      align="center"
      css={{
        backgroundColor: 'rgba(9, 21, 33, 0.1)',
        borderColor: 'rgba(9, 21, 33, 0.1)',
        borderRadius: '20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: 1,
        gap: '1px',
        maxHeight: 50,
        alignSelf: 'center',
        ...css,
      }}
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
              aria-checked={isActive}
              css={{
                backgroundColor: 'transparent',
                color: designTokens.colorPaletteWhite,
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
