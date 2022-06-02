import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { defaultTheme } from './defaultTheme';

export type CSS = Stitches.CSS<typeof config>;

export type VariantProps<T> = Stitches.VariantProps<T>;

export type Theme = typeof theme;

export const { styled, config, globalCss, getCssText, theme, css } = createStitches(defaultTheme);
