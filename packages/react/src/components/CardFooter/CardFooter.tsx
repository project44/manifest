import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledCardFooter } from './CardFooter.styles';
import type { CardFooterElement, CardFooterProps } from './CardFooter.types';

export const CardFooter = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-card-footer', classNameProp);

  return (
    <StyledCardFooter {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledCardFooter>
  );
}) as ForwardRefComponent<CardFooterElement, CardFooterProps>;

CardFooter.displayName = 'CardFooter';
