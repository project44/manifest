import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Stack.styles';

export type StackElement = 'div';

export interface StackOptions<T extends As = StackElement> extends Options<T>, StyleProps {
  /**
   * The gap between elements in the stack.
   */
  gap?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
  /**
   * The layout orientation  of the stack.
   *
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
}

export type StackProps<T extends As = StackElement> = Props<StackOptions<T>>;

export const Stack = createComponent<StackOptions>((props, forwardedRef) => {
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
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifest-container')}
    />
  );
});
