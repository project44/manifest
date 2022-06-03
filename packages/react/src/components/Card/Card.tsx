import * as React from 'react';
import { cx } from '../../styles';
import { StyledCard } from './Card.styles';

export type CardProps = React.ComponentPropsWithoutRef<typeof StyledCard>;

export const Card = React.forwardRef<React.ElementRef<typeof StyledCard>, CardProps>(
  ({ className, ...other }, forwardedRef) => (
    <StyledCard className={cx('manifest-card', className)} ref={forwardedRef} {...other} />
  ),
);
