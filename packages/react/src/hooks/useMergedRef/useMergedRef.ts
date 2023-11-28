import * as React from 'react';
import { mergeRefs } from '../../utils';

export function useMergedRef<T>(...refs: React.ForwardedRef<T>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(mergeRefs(...refs), refs);
}
