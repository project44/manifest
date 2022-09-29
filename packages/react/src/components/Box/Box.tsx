import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './Box.styles';

export type BoxElement = 'div';
export type BoxOptions<T extends As = BoxElement> = Options<T> & StyleProps;
export type BoxProps<T extends As = BoxElement> = Props<BoxOptions<T>>;

export const Box = createComponent<BoxOptions>((props, forwardedRef) => {
	const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp {...other} className={cx(className, classNameProp, 'manifest-box')} ref={forwardedRef} />
	);
});
