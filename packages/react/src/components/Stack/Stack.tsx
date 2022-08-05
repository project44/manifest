import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Stack.styles';

type StackElement = React.ElementRef<'div'>;

interface StackProps extends DOMProps, StyleProps {
  /**
   * The elements to stack.
   */
  children?: React.ReactNode;
}

const Stack = React.forwardRef<StackElement, StackProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div {...other} className={cx(className, classNameProp, 'manifest-Stack')} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Stack.displayName = 'ManifestStack';
}

export { Stack };
export type { StackProps };
