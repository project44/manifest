import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledCard } from './Card.styles';
import type { CardElement, CardProps } from './Card.types';

export const Card = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-card', classNameProp);

  return (
    <StyledCard {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledCard>
  );
}) as ForwardRefComponent<CardElement, CardProps>;

Card.displayName = 'Card';
