import * as React from 'react';
import { CSS, cx, useBoxStyles } from './Box.styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Box
 * -----------------------------------------------------------------------------------------------
 */

type BoxElement = React.ElementRef<'div'>;
type BoxNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface BoxProps extends BoxNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Box = React.forwardRef<BoxElement, BoxProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useBoxStyles({ css });

  return (
    <div {...other} className={cx('manifest-box', className, classNameProp)} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Box.displayName = 'ManifestBox';
}

Box.toString = () => '.manifest-box';

export { Box };
export type { BoxProps };
