import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Link.styles';

type LinkElement = React.ElementRef<'a'>;
type LinkNativeProps = React.ComponentPropsWithoutRef<'a'>;

interface LinkProps extends LinkNativeProps, DOMProps, StyleProps {}

const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { children, className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <a {...other} className={cx(className, classNameProp, 'manifest-link')} ref={forwardedRef}>
      {children}
    </a>
  );
});

if (__DEV__) {
  Link.displayName = 'Link';
}

export { Link };
export type { LinkProps };
