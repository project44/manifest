import { borderWidth, BorderWidthTokens, radius, RadiusTokens } from './border';
import { color, ColorTokens } from './color';
import { shadow, ShadowTokens, zIndex, ZIndexTokens } from './elevation';
import { size, SizeTokens, space, SpaceTokens } from './space';
import {
  fontFamily,
  FontFamilyTokens,
  fontSize,
  FontSizeTokens,
  fontWeight,
  FontWeightTokens,
  letterSpacing,
  LetterSpacingTokens,
  lineHeight,
  LineHeightTokens,
} from './typography';

export const tokens = {
  borderWidth,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  radius,
  shadow,
  size,
  space,
  zIndex,
};

export type Tokens = typeof tokens;

export type {
  BorderWidthTokens,
  ColorTokens,
  FontFamilyTokens,
  FontSizeTokens,
  FontWeightTokens,
  LetterSpacingTokens,
  LineHeightTokens,
  RadiusTokens,
  ShadowTokens,
  SizeTokens,
  SpaceTokens,
  ZIndexTokens,
};
