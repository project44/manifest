import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Flex.styles';

export interface FlexProps extends StyleProps {
  /**
   * The content of the flex container.
   */
  children?: React.ReactNode;
  /**
   * The aligment of the container's children.
   */
  align?: 'baseline' | 'center' | 'end' | 'start';
  /**
   * The justifcation of the container's children.
   */
  justify?: 'around' | 'between' | 'center' | 'end' | 'start';
  /**
   * The orientation of the container's children.
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether the container's should wrap when overflown.
   */
  wrap?: boolean;
}

export const Flex = createComponent<'div', FlexProps>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    align,
    className: classNameProp,
    css,
    justify,
    orientation,
    wrap,
    ...other
  } = props;

  const { className } = useStyles({ align, css, justify, orientation, wrap });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-flex')} ref={forwardedRef} />
  );
});
