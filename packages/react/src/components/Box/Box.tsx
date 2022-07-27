import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Box.styles';

type BoxElement = React.ElementRef<'div'>;

interface BoxProps extends DOMProps, StyleProps {
  /**
   * The content of the box
   */
  children?: React.ReactNode;
}

const Box = React.forwardRef<BoxElement, BoxProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div {...other} className={cx(className, classNameProp, 'manifest-box')} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Box.displayName = 'ManifestBox';
}

export { Box };
export type { BoxProps };
