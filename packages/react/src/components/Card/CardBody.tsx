import type * as Radix from '@radix-ui/react-primitive';
import * as React from 'react';
import { cx } from '../../styles';
import { StyledCardBody } from './Card.styles';

export type CardBodyProps = Radix.ComponentPropsWithoutRef<typeof StyledCardBody>;

export const CardBody = React.forwardRef<React.ElementRef<typeof StyledCardBody>, CardBodyProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledCardBody
      className={cx('manifest-card--body', className)}
      ref={forwardedRef}
      {...other}
    />
  ),
);
