import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledIcon } from './Icon.styles';

export interface IconProps extends ManifestProps, React.ComponentProps<typeof StyledIcon> {
  /**
   * The material-icons icon name
   */
  icon?: string;
}

export const Icon = React.forwardRef<React.ElementRef<typeof StyledIcon>, IconProps>(
  (props, ref) => {
    const { className, icon, ...other } = props;

    return (
      <StyledIcon {...other} className={cx('manifest-icon', 'material-icons', className)} ref={ref}>
        {icon}
      </StyledIcon>
    );
  },
);
