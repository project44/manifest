import * as React from 'react';
import { Avatar } from '@project44-manifest/react-avatar';
import { Dropdown, DropdownMenu, DropdownMenuProps } from '@project44-manifest/react-dropdown';
import { ChevronDown } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Typography } from '@project44-manifest/react-typography';
import {
  StyledSideNavigationFooterMenu,
  StyledSideNavigationFooterMenuContent,
} from './SideNavigationFooterMenu.styles';
import type {
  SideNavigationFooterMenuElement,
  SideNavigationFooterMenuProps,
} from './SideNavigationFooterMenu.types';

export const SideNavigationFooterMenu = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    avatarProps,
    children,
    className: classNameProp,
    css,
    subTitle,
    title,
    ...other
  } = props;

  const className = cx('manifest-navigation-footer', classNameProp);

  return (
    <Dropdown {...(other as DropdownMenuProps)} placement="right bottom">
      <StyledSideNavigationFooterMenu
        ref={forwardedRef}
        as={as}
        className={className}
        css={css}
        variant="tertiary"
      >
        <Avatar {...avatarProps} />
        <StyledSideNavigationFooterMenuContent>
          <Typography variant="subtextBold">{title}</Typography>
          {subTitle && <Typography variant="caption">{subTitle}</Typography>}
        </StyledSideNavigationFooterMenuContent>
        <ChevronDown />
      </StyledSideNavigationFooterMenu>
      <DropdownMenu>{children}</DropdownMenu>
    </Dropdown>
  );
}) as ForwardRefComponent<SideNavigationFooterMenuElement, SideNavigationFooterMenuProps>;
