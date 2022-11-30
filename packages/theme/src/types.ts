import type {
  BorderWidthTokens,
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
} from '@project44-manifest/design-tokens';
import type { ColorsTokens } from './themes/shared/colors';

export interface Theme {
  borderWidths: BorderWidthTokens;
  colors: ColorsTokens;
  fonts: FontFamilyTokens;
  fontSizes: FontSizeTokens;
  fontWeights: FontWeightTokens;
  letterSpacings: LetterSpacingTokens;
  lineHeights: LineHeightTokens;
  radii: RadiusTokens;
  shadows: ShadowTokens;
  sizes: SizeTokens;
  space: SpaceTokens;
  zIndices: ZIndexTokens;
}
