import * as React from 'react';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { CSS, cx } from '@project44-manifest/react-styles';
import { StyledItem } from './LocalNavigationItem.styles';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { LocalNavigationVariant, useLocalNavigation } from '../../LocalNavigation';

import type { AriaButtonProps } from '@react-types/button';
import type { ForwardRefComponent } from '@project44-manifest/react-types';


export interface LocalNavigationItemProps extends AriaButtonProps {
  /** Theme aware style object */
  css?: CSS;
  /** Whether the navigation item is currently selected */
  isSelected?: boolean;
  /**
   * The display variant.
   *
   * @default 'primary'
   */
  variant?: LocalNavigationVariant;
  children?: React.ReactNode;
}

export const LocalNavigationItem = React.forwardRef((props, forwardedRef) => {
  const localNavigation = useLocalNavigation();

  const {
    as,
    autoFocus,
    children,
    className: classNameProp,
    css,
    isSelected,
    variant = localNavigation?.variant ?? 'primary',
  } = props;

  const itemRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps, isPressed } = useButton(
    {
      ...props,
      elementType: typeof as === 'string' ? as : 'button',
    } as AriaButtonProps,
    itemRef,
  );
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({});

  const className = cx(
    'manifest-local-navigation-item',
    {
      'manifest-local-navigation-item--active': isPressed,
      'manifest-local-navigation-item--hover': isHovered,
      'manifest-local-navigation-item--focus-visible': isFocusVisible,
      'manifest-local-navigation-item--selected': isSelected,
    },
    classNameProp,
  );

  return (
    <StyledItem
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      ref={mergeRefs(itemRef, forwardedRef)}
      as={as}
      className={className}
      css={css}
      children={children}
      variant={variant}
    />
  );
}) as ForwardRefComponent<'button', LocalNavigationItemProps>;
