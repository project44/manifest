import * as React from 'react';
import { cx } from '../../styles';
import { StyledIconButton } from './IconButton.styles';

export type IconButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof StyledIconButton>,
  'endIcon' | 'startIcon'
>;

export const IconButton = React.forwardRef<
  React.ElementRef<typeof StyledIconButton>,
  IconButtonProps
>((props: IconButtonProps, forwardedRef) => {
  const { className, size = 'medium', variant = 'primary', ...other } = props;

  return (
    <StyledIconButton
      {...other}
      className={cx('manifest-icon-button', className)}
      ref={forwardedRef}
      size={size}
      variant={variant}
    />
  );
});
