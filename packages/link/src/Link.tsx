import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledLink } from './Link.styles';
import type { LinkElement, LinkProps } from './Link.types';

export const Link = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-link', classNameProp);

  return (
    <StyledLink {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledLink>
  );
}) as ForwardRefComponent<LinkElement, LinkProps>;
