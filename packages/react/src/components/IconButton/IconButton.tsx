import * as React from 'react';
import { Button, ButtonProps } from '../Button';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './IconButton.styles';

export type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;

export const IconButton = createComponent<'button', IconButtonProps>(
  (props: IconButtonProps, forwardedRef) => {
    const { className: classNameProp, css, size = 'medium', variant = 'primary', ...other } = props;

    const { className } = useStyles({ css, size });

    return (
      <Button
        {...other}
        className={cx(className, classNameProp, 'manifest-icon-button')}
        ref={forwardedRef}
        size={size}
        variant={variant}
      />
    );
  },
);
