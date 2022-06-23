import * as React from 'react';
import { CSS, cx, useFlexStyles } from './styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Flex
 * -----------------------------------------------------------------------------------------------
 */

type FlexElement = React.ElementRef<'div'>;
type FlexNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface FlexProps extends FlexNativeProps {
  /**
   * The aligment of the container's children.
   */
  align?: 'baseline' | 'center' | 'end' | 'start';
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

  const { className } = useFlexStyles({ align, css, justify, orientation, wrap });

  return (
    <div {...other} className={cx('manifest-flex', className, classNameProp)} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Flex.displayName = 'ManifestFlex';
}

Flex.toString = () => '.manifest-flex';

export { Flex };
export type { FlexProps };
