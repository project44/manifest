import * as React from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import type { AriaButtonProps } from '@react-types/button';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { LocalNavigationVariant, useLocalNavigation } from '../../LocalNavigation';
import { StyledItem } from './LocalNavigationItem.styles';

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
    ...htmlIntristicAttributes
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
      // mergeProps contains invalid <button> prop onPress, causing significant
      // warning log spam when passed to StyledItem
      {...mergeProps(buttonProps, focusProps, hoverProps, htmlIntristicAttributes)}
      ref={mergeRefs(itemRef, forwardedRef)}
      as={as}
      className={className}
      css={css}
      variant={variant}
    >
      {children}
    </StyledItem>
  );
}) as ForwardRefComponent<'button', LocalNavigationItemProps>;

LocalNavigationItem.displayName = 'LocalNavigationItem';
