import type { StyleProps } from '../../types';
import * as React from 'react';
import { As, createComponent, Props, Options } from '@project44-manifest/system';
import { cx } from '@project44-manifest/react-styles';
import { useStyles } from './Avatar.styles';

export type AvatarElement = 'span';
export type AvatarSize = 'small' | 'medium';

export interface AvatarOptions<T extends As = AvatarElement> extends Options<T>, StyleProps {
	/**
	 * The alt text passed to the image.
	 */
	alt?: string;
	/**
	 * Name used as a fallback if src is not provided or image cannot be found.
	 */
	fallback?: React.ReactNode;
	/**
	 * The size of the avatar.
	 *
	 * @default 'medium'
	 */
	size?: 'medium' | 'small';
	/**
	 * The `src` attribute for the `img` element.
	 */
	src?: string;
}

export type AvatarProps<T extends As = AvatarElement> = Props<AvatarOptions<T>>;

export const Avatar = createComponent<AvatarOptions>((props, forwardedRef) => {
	const {
		as: Comp = 'span',
		alt,
		className: classNameProp,
		css,
		fallback,
		size = 'medium',
		src = '',
		...other
	} = props;

	const [mounted, setMounted] = React.useState(false);
	const [status, setStatus] = React.useState<'error' | 'pending' | 'loaded'>('pending');

	const handleError = React.useCallback(() => setStatus('error'), []);
	const handleLoad = React.useCallback(() => setStatus('loaded'), []);

	const { className } = useStyles({ css, size });

	const classes = cx(className, classNameProp, {
		'manifest-avatar': true,
		[`manifest-avatar--${size}`]: size,
		[`manifest-avatar--${status}`]: status,
	});

	// Reset status to pending if src changes.
	React.useEffect(() => {
		setStatus('pending');
	}, [src]);

	// Ensure that the image is only loaded on the client (ssr).
	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Comp {...other} className={classes} ref={forwardedRef}>
			{src && mounted && status !== 'error' && (
				<img
					alt={alt}
					className="manifest-avatar__image"
					onError={handleError}
					onLoad={handleLoad}
					src={src}
				/>
			)}
			{(!src || status === 'error') && (
				<span className="manifest-avatar__fallback">{fallback}</span>
			)}
		</Comp>
	);
});
