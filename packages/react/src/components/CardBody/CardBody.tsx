import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
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
			className={cx(className, classNameProp, 'manifest-card-body')}
			ref={forwardedRef}
		/>
	);
});
