import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Container.styles';

export type ContainerElement = 'div';

export interface ContainerOptions<T extends As = ContainerElement> extends Options<T>, StyleProps {
	/**
	 * Whether the container should adjust its max-width based on the current screen size.
	 *
	 * @default true
	 */
	fixed?: boolean;
	/**
	 * The max-width of the container.
	 *
	 * @default 'large'
	 */
	maxWidth?: 'large' | 'medium' | 'small' | 'x-large' | 'x-small';
}

export type ContainerProps<T extends As = ContainerElement> = Props<ContainerOptions<T>>;

export const Container = createComponent<ContainerOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'div',
		className: classNameProp,
		css,
		fixed,
		maxWidth = 'large',
		...other
	} = props;

	const { className } = useStyles({ css, fixed, maxWidth });

	return (
		<Comp
			{...other}
			ref={forwardedRef}
			className={cx(className, classNameProp, 'manifest-container')}
		/>
	);
});
