import type * as Radix from '@radix-ui/react-primitive';
import * as React from 'react';
import { cx } from '../../styles';
import { StyledCardFooter } from './Card.styles';

export type CardFooterProps = Radix.ComponentPropsWithoutRef<typeof StyledCardFooter>;

export const CardFooter = React.forwardRef<
  React.ElementRef<typeof StyledCardFooter>,
  CardFooterProps
>(({ className, ...other }, forwardedRef) => (
  <StyledCardFooter
    className={cx('manifest-card--footer', className)}
    ref={forwardedRef}
    {...other}
  />
));
