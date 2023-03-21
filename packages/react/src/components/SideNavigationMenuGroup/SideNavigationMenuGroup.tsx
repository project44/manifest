import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { MenuGroup } from '../MenuGroup';
import { useNavigation } from '../SideNavigation';
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
      {...other}
      ref={forwardedRef}
      className={className}
      isExpanded={!isOpen ? false : undefined}
    />
  );
}) as ForwardRefComponent<SideNavigationMenuGroupElement, SideNavigationMenuGroupProps>;
