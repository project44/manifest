import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './CardFooter.styles';

export type CardFooterElement = 'div';
export type CardFooterOptions<T extends As = CardFooterElement> = Options<T> & StyleProps;
export type CardFooterProps<T extends As = CardFooterElement> = Props<CardFooterOptions<T>>;

export const CardFooter = createComponent<CardFooterOptions>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp
      {...other}
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifest-card-footer')}
    />
  );
});
