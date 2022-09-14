import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Container.styles';

export type ContainerElement = 'div';

export interface ContainerOptions<T extends As = ContainerElement> extends Options<T>, StyleProps {
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

export type ContainerProps<T extends As = ContainerElement> = Props<ContainerOptions<T>>;

export const Container = createComponent<ContainerOptions>((props, forwardedRef) => {
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
