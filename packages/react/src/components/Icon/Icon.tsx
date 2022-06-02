import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends ManifestProps {
  /**
   * The material-icons icon name
   */
  icon?: string;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { className: classNameProp, icon, ...other } = props;

  const className = cx('manifest-icon', 'material-icons', classNameProp);

  return (
    <StyledIcon {...other} className={className} ref={ref}>
      {icon}
    </StyledIcon>
  );
});
