import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Icon.styles';

export interface IconProps extends StyleProps {
  /**
   * The material-icons icon name
   */
  icon?: string;
}

export const Icon = createComponent<'span', IconProps>((props, forwardedRef) => {
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
