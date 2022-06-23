import * as React from 'react';
import { CSS, cx, useAvatarStyles } from './Avatar.styles';
import { useLayoutEffect } from '@react-aria/utils';

/**
 * -----------------------------------------------------------------------------------------------
 * Avatar
 * -----------------------------------------------------------------------------------------------
 */

type AvatarElement = React.ElementRef<'div'>;
type AvatarNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface AvatarProps extends AvatarNativeProps {
  /**
   * The alt text passed to the image.
   */
  alt?: string;
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

const Avatar = React.forwardRef<AvatarElement, AvatarProps>((props, forwardedRef) => {
  const {
    alt,
    className: classNameProp,
    css,
    fallback,
    size = 'medium',
    src = '',
    ...other
  } = props;

  const status = useAvatar({ src });

  const { className } = useAvatarStyles({ css, size });

  return (
    <div {...other} className={cx('manifest-avatar', className, classNameProp)} ref={forwardedRef}>
      {status === 'loaded' && <img alt={alt} className="manifest-avatar--image" src={src} />}
      {status !== 'loaded' && <span className="manifest-avatar--fallback">{fallback}</span>}
    </div>
  );
});

if (__DEV__) {
  Avatar.displayName = 'ManifestAvatar';
}

Avatar.toString = () => '.manifest-avatar';

/**
 * -----------------------------------------------------------------------------------------------
 * useAvatar
 * -----------------------------------------------------------------------------------------------
 */

interface UseAvatarProps {
  /**
   * The image `src` attribute
   */
  src?: string;
}

type ImageStatus = 'error' | 'pending' | 'loaded' | 'loading';

function useAvatar(props: UseAvatarProps) {
  const { src } = props;

  const [status, setStatus] = React.useState<ImageStatus>('pending');

  const mountedRef = React.useRef(false);

  const handleStatusChange = React.useCallback((newStatus: ImageStatus) => {
    if (!mountedRef.current) return;

    setStatus(newStatus);
  }, []);

  React.useEffect(() => {
    handleStatusChange(src ? 'loading' : 'pending');
  }, [handleStatusChange, src]);

  useLayoutEffect(() => {
    if (!src) return;

    mountedRef.current = true;

    const image = new Image();

    image.src = src;
    image.onload = () => handleStatusChange('loaded');
    image.onerror = () => handleStatusChange('error');

    return () => {
      mountedRef.current = false;
    };
  }, [handleStatusChange, src]);

  return status;
}

export { Avatar, useAvatar };
export type { AvatarProps, UseAvatarProps };
