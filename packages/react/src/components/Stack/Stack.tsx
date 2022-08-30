import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Stack.styles';

export interface StackProps extends StyleProps {
  /**
   * The gap between elements in the stack.
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * The layout orientation  of the stack.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

export const Stack = createComponent<'div', StackProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    className: classNameProp,
    css,
    gap,
    orientation = 'vertical',
    ...other
  } = props;

  const { className } = useStyles({ orientation, gap, css });

  return (
    <Comp
      {...other}
      className={cx(className, classNameProp, 'manifest-container')}
      ref={forwardedRef}
    />
  );
});
