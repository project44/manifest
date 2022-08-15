import type { AvatarProps } from './types';
import type { MergeProps } from '../../types';
import * as React from 'react';
import { filterDOMProps } from '../../utils';
import { useId } from '@react-aria/utils';

function useAvatar(props: AvatarProps) {
  const { alt, id: idProp, fallback, size, src = '' } = props;

  const id = useId(idProp);

  const [mounted, setMounted] = React.useState(false);
  const [status, setStatus] = React.useState<'error' | 'pending' | 'loaded'>('pending');

  const handleError = React.useCallback(() => setStatus('error'), []);
  const handleLoad = React.useCallback(() => setStatus('loaded'), []);

  const getRootProps: MergeProps = React.useCallback(
    (props = {}, ref = null) =>
      filterDOMProps('span', {
        ...props,
        id,
        ref,
        role: 'img',
      }),
    [],
  );

  const getImageProps: MergeProps = React.useCallback(
    (props = {}, ref = null) => filterDOMProps('img', {}),
    [],
  );

  // Reset status to pending if src changes.
  React.useEffect(() => {
    setStatus('pending');
  }, [src]);

  // Ensure that the image is only loaded on the client (ssr).
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return {};
}
