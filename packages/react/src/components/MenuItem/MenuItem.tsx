import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useMenuGroup } from '../MenuGroup/MenuGroup.context';
import { Typography, TypographyProps } from '../Typography';
import { StyledMenuItem, StyledMenuItemIcon } from './MenuItem.styles';
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

  let variant: TypographyProps['variant'] = isGrouped ? 'subtext' : 'subtextBold';

  if (isGrouped && isSelected) {
    variant = 'subtextBold';
  }

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
      <div className="manifest-menu-item__container">
        {startIcon && (
          <StyledMenuItemIcon className="manifest-menu-item__icon--start" placement="start">
            {startIcon}
          </StyledMenuItemIcon>
        )}
        <Typography {...labelProps} className="manifest-menu-item__label" variant={variant}>
          {label}
        </Typography>
        {endIcon && (
          <StyledMenuItemIcon className="manifest-menu-item__icon--end" placement="end">
            {endIcon}
          </StyledMenuItemIcon>
        )}
      </div>
    </StyledMenuItem>
  );
}) as ForwardRefComponent<MenuItemElement, MenuItemProps>;
