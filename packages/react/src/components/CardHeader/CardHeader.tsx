import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './CardHeader.styles';

export type CardHeaderElement = 'div';
export type CardHeaderOptions<T extends As = CardHeaderElement> = Options<T> & StyleProps;
export type CardHeaderProps<T extends As = CardHeaderElement> = Props<CardHeaderOptions<T>>;

export const CardHeader = createComponent<CardHeaderOptions>((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp
			{...other}
			className={cx(className, classNameProp, 'manifest-card-header')}
			ref={forwardedRef}
		/>
	);
});
