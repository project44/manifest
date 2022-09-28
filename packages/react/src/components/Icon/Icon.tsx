import type { StyleProps } from '../../types';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '../../styles';
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
			className={cx(className, classNameProp, 'manifest-icon', 'material-icons')}
			ref={forwardedRef}
		>
			{icon}
		</Comp>
	);
});
