import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '../../utils';
import { Avatar } from '../avatar';
import { useButton, useHover } from '../button';
import { Typography } from '../Typography';
import {
  StyledSideNavigationFooter,
  StyledSideNavigationFooterContent,
  StyledSideNavigationFooterIcon,
} from './SideNavigationFooter.styles';
import type {
  SideNavigationFooterElement,
  SideNavigationFooterProps,
} from './SideNavigationFooter.types';

export const SideNavigationFooter = React.forwardRef((props, forwardedRef) => {
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

  const { buttonProps } = useButton(other, buttonRef);
  const { hoverProps, isHovered } = useHover({});

  const className = cx('manifest-navigation-footer', classNameProp);

  return (
    <StyledSideNavigationFooter
      {...mergeProps(buttonProps, hoverProps)}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isHovered={isHovered}
    >
      <Avatar className="manifest-navigation-footer__avatar" {...avatarProps} />
      <StyledSideNavigationFooterContent className="manifest-navigation-footer__content">
        <Typography className="manifest-navigation-footer__title" variant="subtextBold">
          {title}
        </Typography>
        {subTitle && (
          <Typography className="manifest-navigation-footer__sub-title" variant="caption">
            {subTitle}
          </Typography>
        )}
      </StyledSideNavigationFooterContent>
      <StyledSideNavigationFooterIcon className="manifest-navigation-footer__icon" />
    </StyledSideNavigationFooter>
  );
}) as ForwardRefComponent<SideNavigationFooterElement, SideNavigationFooterProps>;

SideNavigationFooter.displayName = 'SideNavigationFooter';
