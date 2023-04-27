import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation';
import { StyledMenuGroup } from './SideNavigationMenuGroup.styles';
import type {
  SideNavigationMenuGroupElement,
  SideNavigationMenuGroupProps,
} from './SideNavigationMenuGroup.types';

export const SideNavigationMenuGroup = React.forwardRef((props, forwardedRef) => {
  const { className: classNameProp, isExpanded: isExpandedProp, ...other } = props;

  const { isOpen } = useNavigation();

  const className = cx('manifest-navigation-menu-group', classNameProp);

  return (
    <StyledMenuGroup
      {...other}
      ref={forwardedRef}
      className={className}
      isExpanded={!isOpen ? false : undefined}
      isOpen={isOpen}
    />
  );
}) as ForwardRefComponent<SideNavigationMenuGroupElement, SideNavigationMenuGroupProps>;
