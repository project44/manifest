import * as React from 'react';
import { MenuGroup } from '@project44-manifest/react-menu';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation.context';
import type {
  SideNavigationMenuGroupElement,
  SideNavigationMenuGroupProps,
} from './SideNavigationMenuGroup.types';

export const SideNavigationMenuGroup = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, isExpanded: isExpandedProp, ...other } = props;

  const { isOpen } = useNavigation();

  const className = cx('manifest-navigation-menu-group', classNameProp);

  return (
    <MenuGroup
      defaultExpanded={isOpen ? undefined : false}
      {...other}
      ref={forwardedRef}
      className={className}
    />
  );
}) as ForwardRefComponent<SideNavigationMenuGroupElement, SideNavigationMenuGroupProps>;
