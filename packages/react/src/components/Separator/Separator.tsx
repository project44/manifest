import { useSeparator } from '@react-aria/separator';
import { mergeProps } from '@react-aria/utils';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Separator.styles';

export type SeparatorElement = 'div';

export interface SeparatorOptions<T extends As = SeparatorElement> extends Options<T>, StyleProps {
	/**
	 * The orientation of the separator.
	 *
	 * @default 'horizontal
	 */
	orientation?: 'horizontal' | 'vertical';
}

export type SeparatorProps<T extends As = SeparatorElement> = Props<SeparatorOptions<T>>;

export const Separator = createComponent<SeparatorOptions>((props, forwardedRef) => {
	const { className: classNameProp, css, orientation = 'horizontal', ...other } = props;

	const Comp = orientation === 'vertical' ? 'div' : 'hr';

	const { separatorProps } = useSeparator({
		...props,
		elementType: Comp,
	});

	const { className } = useStyles({ css, orientation });

	const classes = cx(className, classNameProp, {
		'manifest-separator': true,
		[`manifest-separator--${orientation}`]: orientation,
	});

	return <Comp {...mergeProps(separatorProps, other)} ref={forwardedRef} className={classes} />;
});
