import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Card.styles';

export type CardElement = 'div';
export type CardOptions<T extends As = CardElement> = Options<T> & StyleProps;
export type CardProps<T extends As = CardElement> = Props<CardOptions<T>>;

export const Card = createComponent<CardOptions>((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp {...other} ref={forwardedRef} className={cx(className, classNameProp, 'manifest-card')} />
	);
});
