import { As, createComponent, Props } from '@project44-manifest/system';
import { Button, ButtonElement, ButtonOptions } from '../Button';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './IconButton.styles';

export type IconButtonOptions<T extends As = ButtonElement> = Omit<
	ButtonOptions<T>,
	'endIcon' | 'startIcon'
>;
export type IconButtonProps<T extends As = ButtonElement> = Props<IconButtonOptions<T>>;

export const IconButton = createComponent<IconButtonOptions>(
	(props: IconButtonProps, forwardedRef) => {
		const { className: classNameProp, css, size = 'medium', variant = 'primary', ...other } = props;

		const { className } = useStyles({ css, size });

		return (
			<Button
				{...other}
				className={cx(className, classNameProp, 'manifest-icon-button')}
				ref={forwardedRef}
				size={size}
				variant={variant}
			/>
		);
	},
);
