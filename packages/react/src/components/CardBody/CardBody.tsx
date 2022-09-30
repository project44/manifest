import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './CardBody.styles';

export type CardBodyElement = 'div';
export type CardBodyOptions<T extends As = CardBodyElement> = Options<T> & StyleProps;
export type CardBodyProps<T extends As = CardBodyElement> = Props<CardBodyOptions<T>>;

export const CardBody = createComponent<CardBodyOptions>((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp
			{...other}
			ref={forwardedRef}
			className={cx(className, classNameProp, 'manifest-card-body')}
		/>
	);
});
