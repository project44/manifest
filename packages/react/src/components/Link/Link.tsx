import type { AriaLinkProps } from '@react-types/link';
import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '@react-aria/utils';
import { StyledLink } from './Link.styles';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useLink } from '@react-aria/link';
import { useForwardedRef } from '../../hooks';

export interface LinkProps
  extends ManifestProps,
    AriaLinkProps,
    Omit<React.AnchorHTMLAttributes<unknown>, keyof AriaLinkProps> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, forwardedRef) => {
  const { as, autoFocus, className: classNameProp, css, ...other } = props;

  const linkRef = useForwardedRef<HTMLAnchorElement>(forwardedRef);

  const { hoverProps, isHovered } = useHover({});
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus });
  const { linkProps } = useLink({ ...other, elementType: as }, linkRef);

  const className = cx(
    'manifest-link',
    {
      'manifest-link__focused': isFocused,
      'manifest-link__hovered': isHovered,
    },
    classNameProp,
  );

  return (
    <StyledLink
      {...mergeProps(linkProps, focusProps, hoverProps, other)}
      as={as}
      className={className}
      css={css}
      isFocusVisible={isFocusVisible}
      isHovered={isHovered}
    />
  );
});
