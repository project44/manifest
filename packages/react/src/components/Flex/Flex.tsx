import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Flex.styles';

type FlexElement = React.ElementRef<'div'>;

interface FlexProps extends DOMProps, StyleProps {
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

const Flex = React.forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const { align, className: classNameProp, css, justify, orientation, wrap, ...other } = props;

  const { className } = useStyles({ align, css, justify, orientation, wrap });

  return (
    <div {...other} className={cx(className, classNameProp, 'manifest-flex')} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Flex.displayName = 'ManifestFlex';
}

export { Flex };
export type { FlexProps };
