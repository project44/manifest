import merge from 'lodash.merge';
import { createStitchesTheme } from '../stitches';
import { defaultTheme } from '../theme';
import type { Theme } from '../types';

export function createTheme(overrides: Theme) {
  const { className, theme } = overrides;

  return createStitchesTheme(className || '', merge(defaultTheme.theme, theme));
}
