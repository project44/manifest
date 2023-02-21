import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledActionCardBody } from './ActionCardBody.styles';
import type { ActionCardBodyElement, ActionCardBodyProps } from './ActionCardBody.types';

export const ActionCardBody = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-action-card-body', classNameProp);

  return (
    <StyledActionCardBody {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledActionCardBody>
  );
}) as ForwardRefComponent<ActionCardBodyElement, ActionCardBodyProps>;
