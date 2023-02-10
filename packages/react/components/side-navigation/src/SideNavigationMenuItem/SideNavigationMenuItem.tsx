import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation.context';
import { StyledMenuItem } from './SideNavigationMenuItem.styles';
import type {
  SideNavigationMenuItemElement,
  SideNavigationMenuItemProps,
} from './SideNavigationMenuItem.types';

export const SideNavigationMenuItem = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, ...other } = props;

  const { isOpen } = useNavigation();

  const className = cx('manifest-navigation-menu-item', classNameProp);

  return <StyledMenuItem {...other} ref={forwardedRef} className={className} isOpen={isOpen} />;
}) as ForwardRefComponent<SideNavigationMenuItemElement, SideNavigationMenuItemProps>;
