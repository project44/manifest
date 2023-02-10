import * as React from 'react';
import { Collapsed, Expanded } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation.context';
import {
  StyledIconButton,
  StyledLogo,
  StyledSideNavigationHeader,
} from './SideNavigationHeader.styles';
import type {
  SideNavigationHeaderElement,
  SideNavigationHeaderProps,
} from './SideNavigationHeader.types';

export const SideNavigationHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const { isOpen, isHovered, onOpenChange } = useNavigation();

  const handleToggle = React.useCallback(() => {
    onOpenChange(!isOpen);
  }, [isOpen, onOpenChange]);

  const className = cx('manifest-navigation-header', classNameProp);

  return (
    <StyledSideNavigationHeader
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isHovered={isHovered}
      isOpen={isOpen}
    >
      <StyledLogo className="manifest-navigation-header__logo">{children}</StyledLogo>
      <StyledIconButton
        className="manifest-navigation-header__button"
        variant="tertiary"
        onClick={handleToggle}
      >
        {isOpen ? <Expanded /> : <Collapsed />}
      </StyledIconButton>
    </StyledSideNavigationHeader>
  );
}) as ForwardRefComponent<SideNavigationHeaderElement, SideNavigationHeaderProps>;
