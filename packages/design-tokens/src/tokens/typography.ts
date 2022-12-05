import {
  fontFamilyMono,
  fontFamilyText,
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  fontSizeXLarge,
  fontSizeXSmall,
  fontSizeXxLarge,
  fontWeightBold,
  fontWeightRegular,
  fontWeightSemibold,
  letterSpacingLarge,
  letterSpacingMedium,
  letterSpacingSmall,
  letterSpacingXSmall,
  lineHeightLarge,
  lineHeightMedium,
  lineHeightSmall,
  lineHeightXLarge,
  lineHeightXSmall,
  lineHeightXxLarge,
} from '../constants';

export const fontFamily = {
  mono: fontFamilyMono,
  text: fontFamilyText,
};

export const fontSize = {
  large: fontSizeLarge,
  medium: fontSizeMedium,
  small: fontSizeSmall,
  'x-large': fontSizeXLarge,
  'x-small': fontSizeXSmall,
  'xx-large': fontSizeXxLarge,
};

export const fontWeight = {
  bold: fontWeightBold,
  regular: fontWeightRegular,
  semibold: fontWeightSemibold,
};

export const letterSpacing = {
  large: letterSpacingLarge,
  medium: letterSpacingMedium,
  small: letterSpacingSmall,
  'x-small': letterSpacingXSmall,
};

export const lineHeight = {
  large: lineHeightLarge,
  medium: lineHeightMedium,
  small: lineHeightSmall,
  'x-large': lineHeightXLarge,
  'x-small': lineHeightXSmall,
  'xx-large': lineHeightXxLarge,
};

export type FontFamilyTokens = typeof fontFamily;
export type FontSizeTokens = typeof fontSize;
export type FontWeightTokens = typeof fontWeight;
export type LetterSpacingTokens = typeof letterSpacing;
export type LineHeightTokens = typeof lineHeight;
