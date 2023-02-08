import {
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
} from '@project44-manifest/design-tokens';

export type BorderWidths = typeof borderWidth;
export type Colors = typeof color;
export type Fonts = typeof fontFamily;
export type FontSizes = typeof fontSize;
export type FontWeights = typeof fontWeight;
export type LetterSpacings = typeof letterSpacing;
export type LineHeights = typeof lineHeight;
export type Radii = typeof radius;
export type Shadows = typeof shadow;
export type Sizes = typeof size;
export type Space = typeof space;
export type ZIndices = typeof zIndex;

export interface Theme {
  borderWidths: BorderWidths;
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  radii: Radii;
  shadows: Shadows;
  sizes: Sizes;
  space: Space;
  zIndices: ZIndices;
}
