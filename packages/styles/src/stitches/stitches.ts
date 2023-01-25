import { lightTheme } from '@project44-manifest/theme';
import type { CSS as StitchesCSS } from '@stitches/react';
import { createStitches } from '@stitches/react';
import { color, layout, space, typography } from './utils';

export type CSS = StitchesCSS<typeof config>;
export type Media = typeof config.media;
export type Theme = typeof theme;
export type ThemeMap = typeof config.themeMap;
export type Utils = typeof config.utils;

export const { styled, config, globalCss, getCssText, keyframes, theme, css } = createStitches({
  prefix: 'manifest',
  media: {
    lg: `(min-width: ${lightTheme.sizes.large})`,
    md: `(min-width: ${lightTheme.sizes.medium})`,
    sm: `(min-width: ${lightTheme.sizes.small})`,
    xl: `(min-width: ${lightTheme.sizes['x-large']})`,
    xs: `(min-width: ${lightTheme.sizes['x-small']})`,
  },
  theme: lightTheme,
  utils: {
    ...color,
    ...layout,
    ...space,
    ...typography,
  },
});
