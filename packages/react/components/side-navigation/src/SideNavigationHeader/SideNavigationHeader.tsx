import * as React from 'react';
import { Collapsed, Expanded } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { useNavigation } from '../SideNavigation.context';
import {
  StyledButton,
  StyledContent,
  StyledSideNavigationHeader,
} from './SideNavigationHeader.styles';
import type {
  SideNavigationHeaderElement,
  SideNavigationHeaderProps,
} from './SideNavigationHeader.types';

export const SideNavigationHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const { isOpen, onOpenChange } = useNavigation();

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
      isOpen={isOpen}
    >
      <StyledContent className="manifest-navigation-header__content">{children}</StyledContent>
      <StyledButton
        aria-label={isOpen ? 'close' : 'open'}
        className="manifest-navigation-header__button"
        variant="tertiary"
        onClick={handleToggle}
      >
        {isOpen ? <Expanded /> : <Collapsed />}
      </StyledButton>
    </StyledSideNavigationHeader>
  );
}) as ForwardRefComponent<SideNavigationHeaderElement, SideNavigationHeaderProps>;
