import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledCardHeader } from './CardHeader.styles';
import type { CardHeaderElement, CardHeaderProps } from './CardHeader.types';

export const CardHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-card-header', classNameProp);

  return (
    <StyledCardHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledCardHeader>
  );
}) as ForwardRefComponent<CardHeaderElement, CardHeaderProps>;
