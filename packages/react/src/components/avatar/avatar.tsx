import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './avatar.styles';

/* -------------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------*/

type AvatarElement = 'div';

interface AvatarProps {
  /** The alt text passed to the image */
  alt?: string;
  /** Theme aware style object */
  css?: CSS;
  /** Name used as a fallback if src is not provided or image cannot be found */
  fallback?: React.ReactNode;
  /**
   * The size of the avatar.
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /** The `src` attribute for the `img` element */
  src?: string;
}

const Avatar = React.forwardRef((props, forwardedRef) => {
  const {
    alt,
    as,
    children,
    className: classNameProp,
    css,
    fallback,
    size = 'medium',
    src = '',
    ...other
  } = props;

  const [mounted, setMounted] = React.useState(false);
  const [status, setStatus] = React.useState<'error' | 'loaded' | 'pending'>('pending');

  const handleError = React.useCallback(() => void setStatus('error'), []);
  const handleLoad = React.useCallback(() => void setStatus('loaded'), []);

  const classes = cx('manifest-avatar', classNameProp, {
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
    <StyledAvatar ref={forwardedRef} as={as} className={classes} css={css} size={size} {...other}>
      {src && mounted && status !== 'error' && (
        <StyledAvatarImage
          alt={alt}
          className="manifest-avatar__image"
          src={src}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
      {(!src || status === 'error') && (
        <StyledAvatarFallback className="manifest-avatar__fallback">
          {fallback}
        </StyledAvatarFallback>
      )}
    </StyledAvatar>
  );
}) as ForwardRefComponent<AvatarElement, AvatarProps>;

export type { AvatarProps };
export { Avatar };
