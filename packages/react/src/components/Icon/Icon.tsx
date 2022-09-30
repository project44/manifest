import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Icon.styles';

export type IconElement = 'span';

export interface IconOptions<T extends As = IconElement> extends Options<T>, StyleProps {
	/**
	 * The material-icons icon name
	 */
	icon?: string;
}

export type IconProps<T extends As = IconElement> = Props<IconOptions<T>>;

export const Icon = createComponent<IconOptions>((props, forwardedRef) => {
	const { as: Comp = 'span', className: classNameProp, css, icon, ...other } = props;

	const { className } = useStyles({ css });

	return (
		<Comp
			{...other}
			ref={forwardedRef}
			className={cx(className, classNameProp, 'manifest-icon', 'material-icons')}
		>
			{icon}
		</Comp>
	);
});
