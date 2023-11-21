import * as React from 'react';
import { ChevronDown } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '../../utils';
import { Avatar } from '../avatar';
import { useButton, useHover } from '../button';
import { Dropdown } from '../Dropdown';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu';
import { Typography } from '../Typography';
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

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButton({}, buttonRef);
  const { hoverProps } = useHover({});

  const className = cx('manifest-navigation-footer', classNameProp);

  return (
    <Dropdown {...(other as DropdownMenuProps)} placement="right bottom">
      <StyledSideNavigationFooterMenu
        {...mergeProps(buttonProps, hoverProps)}
        ref={forwardedRef}
        as={as}
        className={className}
        css={css}
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

SideNavigationFooterMenu.displayName = 'SideNavigationFooterMenu';
