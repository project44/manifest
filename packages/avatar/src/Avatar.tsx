import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './Avatar.styles';
import type { AvatarElement, AvatarProps } from './Avatar.types';

export const Avatar = React.forwardRef((props, forwardedRef) => {
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
