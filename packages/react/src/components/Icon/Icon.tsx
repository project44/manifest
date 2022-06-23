import * as React from 'react';
import { CSS, cx, useIconStyles } from './Icon.styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------
 */

type IconElement = React.ElementRef<'span'>;
type IconNativeProps = React.ComponentPropsWithoutRef<'span'>;

interface IconProps extends IconNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The material-icons icon name
   */
  icon?: string;
}

const Icon = React.forwardRef<IconElement, IconProps>((props, forwardedRef) => {
  const { className: classNameProp, css, icon, ...other } = props;

  const { className } = useIconStyles({ css });

  return (
    <span
      {...other}
      className={cx('manifest-icon', 'material-icons', className, classNameProp)}
      ref={forwardedRef}
    >
      {icon}
    </span>
  );
});

if (__DEV__) {
  Icon.displayName = 'ManifestIcon';
}

Icon.toString = () => '.manifest-icon';

export { Icon };
export type { IconProps };
