import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Icon.styles';

type IconElement = React.ElementRef<'span'>;

interface IconProps extends DOMProps, StyleProps {
  /**
   * The material-icons icon name
   */
  icon?: string;
}

const Icon = React.forwardRef<IconElement, IconProps>((props, forwardedRef) => {
  const { className: classNameProp, css, icon, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <span
      {...other}
      className={cx(className, classNameProp, 'manifest-icon', 'material-icons')}
      ref={forwardedRef}
    >
      {icon}
    </span>
  );
});

if (__DEV__) {
  Icon.displayName = 'ManifestIcon';
}

export { Icon };
export type { IconProps };
