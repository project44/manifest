import * as React from 'react';
import { ArrowRight } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledActionCardHeader } from './ActionCardHeader.styles';
import type { ActionCardHeaderElement, ActionCardHeaderProps } from './ActionCardHeader.types';

export const ActionCardHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-action-card-header', classNameProp);

  return (
    <StyledActionCardHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
      <ArrowRight aria-hidden className="manifest-action-card-header__icon" />
    </StyledActionCardHeader>
  );
}) as ForwardRefComponent<ActionCardHeaderElement, ActionCardHeaderProps>;
