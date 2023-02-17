import type { CSS as StitchesCSS } from '@stitches/react';
import { createStitches } from '@stitches/react';
import { defaultTheme } from './theme';

const { styled, config, createTheme, globalCss, getCssText, keyframes, theme, css } =
  createStitches(defaultTheme);

export { config, createTheme, css, getCssText, globalCss, keyframes, styled, theme };

export type CreateTheme = ReturnType<typeof createTheme>;
export type CSS = StitchesCSS<typeof config>;
export type Media = typeof config.media;
export type StitchesTheme = typeof theme;
export type ThemeMap = typeof config.themeMap;
export type Utils = typeof config.utils;
