import * as React from 'react';
import { cx, VariantProps } from '../../styles';
import { StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './Avatar.styles';
import { ManifestProps } from '../../types';
import { useIsomorphicLayoutEffect } from '../../hooks';

type ImageStatus = 'error' | 'pending' | 'loaded' | 'loading';

export interface AvatarProps extends ManifestProps, VariantProps<typeof StyledAvatar> {
  /**
   * Text description of the avatar.
   */
  alt?: string;
  /**
   * Name used as a fallback if src is not provided or image cannot be found.
   */
  fallback?: React.ReactNode;
  /**
   * The image `src` attribute
   */
  src?: string;
  /**
   * The image `srcset` attribute
   */
  srcSet?: string;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>((props, forwardedRef) => {
  const { alt, as, className: classNameProp, fallback, src, srcSet, ...other } = props;

  const [status, setStatus] = React.useState<ImageStatus>('pending');

  const mountedRef = React.useRef(false);

  const className = cx(
    'manifest-avatar',
    {
      [`manifest-avatar__${status}`]: status,
    },
    classNameProp,
  );

  const handleStatusChange = React.useCallback((newStatus: ImageStatus) => {
    if (!mountedRef.current) return;

    setStatus(newStatus);
  }, []);

  React.useEffect(() => {
    handleStatusChange(src ? 'loading' : 'pending');
  }, [handleStatusChange, src]);

  useIsomorphicLayoutEffect(() => {
    if (!src) return;

    mountedRef.current = true;

    const image = new Image();

    image.src = src;
    image.onload = () => handleStatusChange('loaded');
    image.onerror = () => handleStatusChange('error');

    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      mountedRef.current = false;
    };
  }, [src]);

  return (
    <StyledAvatar {...other} as={as} className={className} ref={forwardedRef}>
      {status === 'loaded' && (
        <StyledAvatarImage alt={alt} className="manifest-avatar-image" src={src} />
      )}
      {status !== 'loaded' && (
        <StyledAvatarFallback className="manifest-avatar-fallback">{fallback}</StyledAvatarFallback>
      )}
    </StyledAvatar>
  );
});
