import * as React from 'react';
import { cx } from '../../styles';
import { StyledCardBody } from './Card.styles';

export type CardBodyProps = React.ComponentPropsWithoutRef<typeof StyledCardBody>;

export const CardBody = React.forwardRef<React.ElementRef<typeof StyledCardBody>, CardBodyProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledCardBody
      className={cx('manifest-card--body', className)}
      ref={forwardedRef}
      {...other}
    />
  ),
);
