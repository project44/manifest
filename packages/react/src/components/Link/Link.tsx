import * as React from 'react';
import { CSS, cx, useLinkStyles } from './Link.styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Link
 * -----------------------------------------------------------------------------------------------
 */

type LinkElement = React.ElementRef<'a'>;
type LinkNativeProps = React.ComponentPropsWithoutRef<'a'>;

interface LinkProps extends LinkNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const { children, className: classNameProp, css, ...other } = props;

  const { className } = useLinkStyles({ css });

  return (
    <a {...other} className={cx('manifest-link', className, classNameProp)} ref={forwardedRef}>
      {children}
    </a>
  );
});

if (__DEV__) {
  Link.displayName = 'Link';
}

Link.toString = () => '.manifest-link';

export { Link };
export type { LinkProps };
