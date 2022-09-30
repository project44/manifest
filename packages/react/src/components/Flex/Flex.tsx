import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './Flex.styles';

export type FlexElement = 'div';

export interface FlexOptions<T extends As = FlexElement> extends Options<T>, StyleProps {
	/**
	 * The alignment of the container's children.
	 */
	align?: 'baseline' | 'center' | 'end' | 'start';
	/**
	 * The justification of the container's children.
	 */
	justify?: 'around' | 'between' | 'center' | 'end' | 'start';
	/**
	 * The gap between rows and columns.
	 */
	gap?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
	/**
	 * The orientation of the container's children.
	 */
	orientation?: 'horizontal' | 'vertical';
	/**
	 * Whether the container's should wrap when overflown.
	 */
	wrap?: boolean;
}

export type FlexProps<T extends As = FlexElement> = Props<FlexOptions<T>>;

export const Flex = createComponent<FlexOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		align,
		className: classNameProp,
		gap,
		css,
		justify,
		orientation,
		wrap,
		...other
	} = props;

	const { className } = useStyles({ align, css, justify, gap, orientation, wrap });

	return (
		<Comp {...other} className={cx(className, classNameProp, 'manifest-flex')} ref={forwardedRef} />
	);
});
