import * as React from 'react';
import { MergeableRef, mergeRefs } from '../utils';

export function useMergedRefs<T>(...refs: MergeableRef<T>[]) {
  return React.useCallback(mergeRefs(...refs), refs);
}
