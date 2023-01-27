import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { noop } from '@project44-manifest/react-utils';
import { useControlledState } from '@project44-manifest/use-controlled-state';
import { NavigationProvider } from './SideNavigation.context';
import { StyledNavigation, StyledNavigationSurface } from './SideNavigation.styles';
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

  const [isOpen, setOpen] = useControlledState(isOpenProp!, defaultOpen ?? true, onOpenChange);

  const context = React.useMemo(
    () => ({
      isOpen,
      onOpenChange: setOpen,
    }),
    [isOpen, setOpen],
  );

  const className = cx('manifest-navigation', classNameProp, {
    'manifest-navigation--closed': !isOpen,
    'manifest-navigation--open': isOpen,
  });

  return (
    <StyledNavigation
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isOpen={isOpen}
    >
      <NavigationProvider value={context}>
        <StyledNavigationSurface className="manifest-navigation__surface" isOpen={isOpen}>
          {children}
        </StyledNavigationSurface>
      </NavigationProvider>
    </StyledNavigation>
  );
}) as ForwardRefComponent<NavigationElement, NavigationProps>;
