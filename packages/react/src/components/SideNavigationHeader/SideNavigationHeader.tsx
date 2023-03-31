import * as React from 'react';
import { Collapsed, Expanded } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation';
import {
  StyledSideNavigationHeader,
  StyledSideNavigationHeaderButton,
  StyledSideNavigationHeaderContent,
  StyledSideNavigationHeaderLogo,
} from './SideNavigationHeader.styles';
import type {
  SideNavigationHeaderElement,
  SideNavigationHeaderProps,
} from './SideNavigationHeader.types';

export const SideNavigationHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, logo, ...other } = props;

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
      <StyledSideNavigationHeaderLogo className="manifest-navigation-header__logo">
        {logo}
      </StyledSideNavigationHeaderLogo>
      <StyledSideNavigationHeaderContent className="manifest-navigation-header__content">
        {children}
      </StyledSideNavigationHeaderContent>
      <StyledSideNavigationHeaderButton
        className="manifest-navigation-header__button"
        variant="tertiary"
        onPress={handleToggle}
      >
        {isOpen ? <Expanded /> : <Collapsed />}
      </StyledSideNavigationHeaderButton>
    </StyledSideNavigationHeader>
  );
}) as ForwardRefComponent<SideNavigationHeaderElement, SideNavigationHeaderProps>;
