import {
	borderWidthLarge,
	borderWidthMedium,
	borderWidthSmall,
	radiusFull,
	radiusSmall,
} from '../constants';

export const borderWidth = {
	large: borderWidthLarge,
	medium: borderWidthMedium,
	small: borderWidthSmall,
};

export const radius = {
	full: radiusFull,
	small: radiusSmall,
};

export type BorderWidthTokens = typeof borderWidth;
export type RadiusTokens = typeof radius;
