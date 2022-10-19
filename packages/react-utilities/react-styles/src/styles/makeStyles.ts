import { CSS, css } from '../stitches';
import { useTheme } from '../theme';
import { Styles } from '../types';
import { cx, makeCSSObject, mergeClasses } from '../utils';

export interface UseStylesOptions<ClassKey extends string> {
	/**
	 * Append additional class names to the keys of the style object.
	 */
	classes?: Partial<Record<ClassKey, string>>;
	/**
	 * Override or extend styles of the component.
	 */
	css?: CSS;
	/**
	 * Component name used for class name prefixing.
	 */
	name?: string;
}

/**
 * Create a style hook that returns a map of class keys with generated classnames.
 */
export function makeStyles<Props extends object = {}, ClassKey extends string = string>(
	stylesOrFn: Styles<Props, ClassKey>,
) {
	const stylesCreator = typeof stylesOrFn === 'function' ? stylesOrFn : () => stylesOrFn;

	return function useStyles(props: Props = {} as Props, options: UseStylesOptions<ClassKey> = {}) {
		const { theme } = useTheme();
		const name = options?.name ?? 'makeStyles';

		const styles = stylesCreator(theme, props);
		const cssObject = makeCSSObject(styles);

		// TODO: update the css call here to use the option name to create readable classnames:
		// https://github.com/stitchesjs/stitches/pull/1103
		const getStyles = css(cssObject);

		const classes: Record<ClassKey, string> = Object.fromEntries(
			Object.keys(styles).map((key) => {
				const value =
					key === 'root'
						? `manifest-${name}-root ${getStyles({ css: options?.css, ...props }).toString()}`
						: `manifest-${name}-${key.toString()}`;

				return [key, value];
			}),
		) as Record<ClassKey, string>;

		return {
			classes: mergeClasses(classes, options?.classes),
			cx,
			theme,
		};
	};
}
