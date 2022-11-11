import type { Theme } from '../types';
import { borderWidths, radii } from './shared/borders';
import { colors } from './shared/colors';
import { shadows, zIndices } from './shared/elevation';
import { sizes, space } from './shared/layout';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './shared/typography';

export const lightTheme: Theme = {
	borderWidths,
	colors,
	fonts,
	fontSizes,
	fontWeights,
	letterSpacings,
	lineHeights,
	radii,
	shadows,
	sizes,
	space,
	zIndices,
};
