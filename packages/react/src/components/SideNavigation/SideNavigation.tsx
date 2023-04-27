import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useControlledState } from '../../hooks';
import { noop } from '../../utils';
import { Transition } from '../Transition';
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

  const [isOpen, setOpen] = useControlledState(isOpenProp!, defaultOpen ?? true, onOpenChange);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => void setIsHovered(true), []);

  const handleMouseLeave = React.useCallback(() => void setIsHovered(false), []);

  // Handle an issue with safari and edge not trigger mouse leave events when the side
  // navigation width changes.
  const handleExited = React.useCallback(() => void setIsHovered(false), []);

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
      <Transition in={isOpen} onExited={handleExited}>
        <StyledNavigation
          {...other}
          ref={forwardedRef}
          as={as}
          className={className}
          css={css}
          isOpen={isOpen}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="manifest-navigation__container">{children}</div>
        </StyledNavigation>
      </Transition>
    </NavigationProvider>
  );
}) as ForwardRefComponent<NavigationElement, NavigationProps>;
