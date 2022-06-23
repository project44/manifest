import * as React from 'react';
import { useLayoutEffect } from '@react-aria/utils';

export interface UseImageOptions {
  /**
   * The image `src` attribute
   */
  src?: string;
  /**
   * The image `srcset` attribute
   */
  srcSet?: string;
}

export type ImageStatus = 'error' | 'pending' | 'loaded' | 'loading';

export function useImage(options: UseImageOptions) {
  const { src, srcSet } = options;

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

    if (srcSet) {
      image.srcset = srcSet;
    }

    return () => {
      mountedRef.current = false;
    };
  }, [src]);

  return status;
}
