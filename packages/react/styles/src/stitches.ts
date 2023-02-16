import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { defaultTheme } from './theme';

const { styled, config, createTheme, globalCss, getCssText, keyframes, theme, css } =
  createStitches(defaultTheme);

export const createStitchesTheme = createTheme;

export { config, css, getCssText, globalCss, keyframes, styled, theme };

export type StitchesConfig = typeof config;
export type StitchesTheme = typeof theme;

export type CSS = Stitches.CSS<typeof config>;
export type CSSProperties = Stitches.CSSProperties;

export type ScaleValue<T> = Stitches.ScaleValue<T>;
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>;
export type VariantProps<T> = Stitches.VariantProps<T>;
