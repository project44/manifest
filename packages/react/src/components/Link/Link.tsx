import * as React from 'react';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledLink } from './Link.styles';

export interface LinkProps
  extends ManifestProps,
    React.ComponentPropsWithoutRef<typeof StyledLink> {}

export const Link = React.forwardRef<React.ElementRef<typeof StyledLink>, LinkProps>(
  (props, forwardedRef) => {
    const { className, ...other } = props;

    return <StyledLink {...other} className={cx('manifest-link', className)} ref={forwardedRef} />;
  },
);
