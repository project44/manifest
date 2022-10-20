import { CSS, css } from '../stitches';
import { useTheme } from '../theme';
import { Styles } from '../types';
import { cx, makeCSSObject } from '../utils';

export interface UseStylesOptions<ClassKey extends string> {
	/**
	 * Override classnames provided by a consumer of the component.
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
	/**
	 * Additional classnames to append to each slot within the style object.
	 */
	slots?: Partial<Record<ClassKey, readonly (string | false | null | undefined)[]>>;
}

/**
 * Create a style hook that returns a map of class keys with generated classnames.
 */
export function makeStyles<Props extends object = {}, ClassKey extends string = string>(
	stylesOrFn: Styles<Props, ClassKey>,
) {
	const stylesCreator = typeof stylesOrFn === 'function' ? stylesOrFn : () => stylesOrFn;

	return function useStyles(props: Props = {} as Props, options: UseStylesOptions<ClassKey> = {}) {
		const { classes, name = 'makeStyles', slots } = options;
		const { theme } = useTheme();

		const styles = stylesCreator(theme, props);
		const cssObject = makeCSSObject(styles, name);

		// TODO: update the css call here to use the option name to create readable classnames:
		// https://github.com/stitchesjs/stitches/pull/1103
		const getStyles = css(cssObject);

		const formattedClasses: Record<ClassKey, string> = Object.fromEntries(
			Object.keys(styles).map((key) => {
				const results: string[] = [];

				results.push(`manifest-${name}-${key}`);

				if (slots && Object.prototype.hasOwnProperty.call(slots, key)) {
					const slot = slots?.[key as keyof typeof slots];

					if (slot) {
						slot.forEach((item) => {
							if (item) {
								results.push(`manifest-${name}-${item}`);

								if (classes && classes?.[item as keyof typeof classes]) {
									results.push(classes[item as keyof typeof classes]!);
								}
							}
						});
					}
				}

				if (classes && classes?.[key as keyof typeof classes]) {
					results.push(classes[key as keyof typeof classes]!);
				}

				if (key === 'root') {
					results.push(getStyles({ css: options?.css, ...props }).toString());
				}

				return [key, results.join(' ')];
			}),
		) as Record<ClassKey, string>;

		return {
			classes: formattedClasses,
			cx,
			theme,
		};
	};
}
