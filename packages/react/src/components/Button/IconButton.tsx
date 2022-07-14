import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { cx } from '../../styles';
import { useStyles } from './IconButton.styles';

type IconButtonElement = React.ElementRef<typeof Button>;
type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;

const IconButton = React.forwardRef<IconButtonElement, IconButtonProps>(
  (props: IconButtonProps, forwardedRef) => {
    const { className: classNameProp, css, size = 'medium', variant = 'primary', ...other } = props;

    const { className } = useStyles({ css, size });

    const classes = cx(className, classNameProp, 'manifest-icon-button');

    return (
      <Button {...other} className={classes} ref={forwardedRef} size={size} variant={variant} />
    );
  },
);

if (__DEV__) {
  IconButton.displayName = 'ManifestIconButton';
}

export { IconButton };
export type { IconButtonProps };
