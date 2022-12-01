import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Box.styles';

export type BoxElement = 'div';
export type BoxOptions<T extends As = BoxElement> = Options<T> & StyleProps;
export type BoxProps<T extends As = BoxElement> = Props<BoxOptions<T>>;

export const Box = createComponent<BoxOptions>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp {...other} ref={forwardedRef} className={cx(className, classNameProp, 'manifest-box')} />
  );
});
