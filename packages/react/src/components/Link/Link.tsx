import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Link.styles';

export type LinkElement = 'a';
export type LinkOptions<T extends As = LinkElement> = Options<T> & StyleProps;
export type LinkProps<T extends As = LinkElement> = Props<LinkOptions<T>>;

export const Link = createComponent<LinkOptions>((props, forwardedRef) => {
  const { as: Comp = 'a', children, className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp {...other} ref={forwardedRef} className={cx(className, classNameProp, 'manifest-link')}>
      {children}
    </Comp>
  );
});
