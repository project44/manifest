import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Menu } from '../Menu';
import type {
  SideNavigationMenuElement,
  SideNavigationMenuProps,
} from './SideNavigationMenu.types';

export const SideNavigationMenu = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, ...other } = props;

  const className = cx('manifest-navigation-menu', classNameProp);

  return <Menu {...other} ref={forwardedRef} className={className} />;
}) as ForwardRefComponent<SideNavigationMenuElement, SideNavigationMenuProps>;

SideNavigationMenu.displayName = 'SideNavigationMenu';
