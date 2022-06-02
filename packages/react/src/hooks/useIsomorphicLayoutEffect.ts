import { useEffect, useLayoutEffect } from 'react';
import { canUseDOM } from 'dom-lib';

/**
 * SSR safe useEffect.
 */
export const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;
