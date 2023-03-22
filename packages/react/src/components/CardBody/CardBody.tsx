import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledCardBody } from './CardBody.styles';
import type { CardBodyElement, CardBodyProps } from './CardBody.types';

export const CardBody = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-card-body', classNameProp);

  return (
    <StyledCardBody {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledCardBody>
  );
}) as ForwardRefComponent<CardBodyElement, CardBodyProps>;
