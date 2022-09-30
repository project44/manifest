import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { useStyles } from './Typography.styles';

export type TypographyElement = 'span';

export interface TypographyOptions<T extends As = TypographyElement>
	extends Options<T>,
		StyleProps {
	/**
	 * The display variant of the text.
	 *
	 * @default 'primary'
	 */
	variant?:
		| 'body'
		| 'bodyBold'
		| 'caption'
		| 'captionBold'
		| 'display'
		| 'heading'
		| 'subtext'
		| 'subtextBold'
		| 'subtitle'
		| 'title';
}

export type TypographyProps<T extends As = TypographyElement> = Props<TypographyOptions<T>>;

export const Typography = createComponent<TypographyOptions>((props, forwardedRef) => {
	const { as: Comp = 'span', className: classNameProp, css, variant = 'body', ...other } = props;

	const { className } = useStyles({ css, variant });

	const classes = cx(className, classNameProp, {
		'manifest-typography': true,
		[`manifest-typography--${variant}`]: variant,
	});

	return <Comp {...other} ref={forwardedRef} className={classes} />;
});
