import { CSS as StitchesCSS, createStitches } from '@stitches/react';
import { defaultTheme } from './defaultTheme';

export type CSS = StitchesCSS<typeof config>;

export type Theme = typeof theme;

export const { styled, config, globalCss, getCssText, keyframes, theme, css } =
  createStitches(defaultTheme);
