import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Container.styles';

export interface ContainerProps extends StyleProps {
  /**
   * Whether the container should adjust its max-width based on the current screen size.
   *
   * @default true
   */
  fixed?: boolean;
  /**
   * The max-width of the container.
   *
   * @default 'large'
   */
  maxWidth?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
}

export const Container = createComponent<'div', ContainerProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    className: classNameProp,
    css,
    fixed,
    maxWidth = 'large',
    ...other
  } = props;

  const { className } = useStyles({ css, fixed, maxWidth });

  return (
    <Comp
      {...other}
      className={cx(className, classNameProp, 'manifest-container')}
      ref={forwardedRef}
    />
  );
});
