import * as React from 'react';
import { useHover } from '@react-aria/interactions';
import { cx } from '@project44-manifest/react-styles';
import { Transition } from '@project44-manifest/react-transition';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps, noop } from '@project44-manifest/react-utils';
import { useControlledState } from '@project44-manifest/use-controlled-state';
import { NavigationProvider } from './SideNavigation.context';
import { StyledNavigation } from './SideNavigation.styles';
import type { NavigationElement, NavigationProps } from './SideNavigation.types';

export const SideNavigation = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange = noop,
    ...other
  } = props;

  const { isHovered, hoverProps } = useHover({});

  const [isOpen, setOpen] = useControlledState(isOpenProp!, defaultOpen ?? true, onOpenChange);

  const context = React.useMemo(
    () => ({
      isHovered,
      isOpen,
      onOpenChange: setOpen,
    }),
    [isHovered, isOpen, setOpen],
  );

  const className = cx('manifest-navigation', classNameProp, {
    'manifest-navigation--closed': !isOpen,
    'manifest-navigation--open': isOpen,
  });

  return (
    <NavigationProvider value={context}>
      <Transition in={isOpen}>
        <StyledNavigation
          {...mergeProps(hoverProps, other)}
          ref={forwardedRef}
          as={as}
          className={className}
          css={css}
          isOpen={isOpen}
        >
          {children}
        </StyledNavigation>
      </Transition>
    </NavigationProvider>
  );
}) as ForwardRefComponent<NavigationElement, NavigationProps>;
