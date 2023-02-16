import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledActionCard } from './ActionCard.styles';
import type { ActionCardElement, ActionCardProps } from './ActionCard.types';

export const ActionCard = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, href, css, ...other } = props;

  const className = cx('manifest-action-card', classNameProp);

  return (
    <StyledActionCard
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      href={href}
    >
      {children}
    </StyledActionCard>
  );
}) as ForwardRefComponent<ActionCardElement, ActionCardProps>;
