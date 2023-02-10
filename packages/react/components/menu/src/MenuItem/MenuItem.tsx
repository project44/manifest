import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useMenuGroup } from '../MenuGroup/MenuGroup.context';
import { StyledMenuItem, StyledMenuItemIcon, StyledMenuItemLabel } from './MenuItem.styles';
import type { MenuItemElement, MenuItemProps } from './MenuItem.types';

export const MenuItem = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    endIcon,
    startIcon,
    label,
    labelProps = {},
    isSelected,
    ...other
  } = props;

  const { isGrouped } = useMenuGroup() ?? {};

  const className = cx('manifest-menu-item', classNameProp);

  return (
    <StyledMenuItem
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isGrouped={isGrouped}
      isSelected={isSelected}
    >
      {startIcon && (
        <StyledMenuItemIcon className="manifest-menu-item__icon--start" placement="start">
          {startIcon}
        </StyledMenuItemIcon>
      )}
      <StyledMenuItemLabel
        {...labelProps}
        className="manifest-menu-item__label"
        variant={isSelected ? 'subtextBold' : 'subtext'}
      >
        {label}
      </StyledMenuItemLabel>
      {endIcon && (
        <StyledMenuItemIcon className="manifest-menu-item__icon--end" placement="end">
          {endIcon}
        </StyledMenuItemIcon>
      )}
    </StyledMenuItem>
  );
}) as ForwardRefComponent<MenuItemElement, MenuItemProps>;
