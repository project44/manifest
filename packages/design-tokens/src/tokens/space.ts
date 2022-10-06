import {
	sizeLarge,
	sizeMedium,
	sizeSmall,
	sizeXLarge,
	sizeXSmall,
	spaceLarge,
	spaceMedium,
	spaceSmall,
	spaceXLarge,
	spaceXSmall,
} from '../constants';

export const size = {
	large: sizeLarge,
	medium: sizeMedium,
	small: sizeSmall,
	'x-large': sizeXLarge,
	'x-small': sizeXSmall,
};

export const space = {
	medium: spaceLarge,
	small: spaceMedium,
	large: spaceSmall,
	'x-large': spaceXLarge,
	'x-small': spaceXSmall,
};

export type SizeTokens = typeof size;
export type SpaceTokens = typeof space;
