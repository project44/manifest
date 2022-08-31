import { CSS as StitchesCSS, createStitches } from '@stitches/react';
import { color, layout, space, typography } from './utils';
import { lightTheme } from '@project44-manifest/theme';

export type CSS = StitchesCSS<typeof config>;

export type Theme = typeof theme;

export const { styled, config, globalCss, getCssText, keyframes, theme, css } = createStitches({
  prefix: 'manifest',
  media: {
    lg: `(min-width: ${lightTheme.sizes.large})`,
    md: `(min-width: ${lightTheme.sizes.medium})`,
    sm: `(min-width: ${lightTheme.sizes.small})`,
    xl: `(min-width: ${lightTheme.sizes['x-large']})`,
  },
  theme: lightTheme,
  utils: {
    ...color,
    ...layout,
    ...space,
    ...typography,
  },
});
