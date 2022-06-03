import type * as Radix from '@radix-ui/react-primitive';
import * as React from 'react';
import { cx } from '../../styles';
import { StyledCardHeader } from './Card.styles';
import { Typography } from '../Typography';

export type CardHeaderProps = Radix.ComponentPropsWithoutRef<typeof StyledCardHeader>;

export const CardHeader = React.forwardRef<
  React.ElementRef<typeof StyledCardHeader>,
  CardHeaderProps
>((props, forwardedRef) => {
  const { children: childrenProp, className, ...other } = props;

  let children = childrenProp;

  if (typeof children === 'string') {
    children = <Typography variant="title">{children}</Typography>;
  }

  return (
    <StyledCardHeader
      className={cx('manifest-card--header', className)}
      ref={forwardedRef}
      {...other}
    >
      {children}
    </StyledCardHeader>
  );
});
