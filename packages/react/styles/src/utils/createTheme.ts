import merge from 'lodash.merge';
import { createStitchesTheme } from '../stitches';
import { defaultTheme } from '../theme';
import type { Theme } from '../types';

export function createTheme(overrides: Theme) {
  const { className, theme, type } = overrides;

  return createStitchesTheme(className || `${type}-theme`, merge(defaultTheme.theme, theme));
}
