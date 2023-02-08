import * as React from 'react';
import { mergeRefs } from '@project44-manifest/react-utils';

export function useMergedRef<T>(...refs: React.ForwardedRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(mergeRefs(...refs), refs);
}
