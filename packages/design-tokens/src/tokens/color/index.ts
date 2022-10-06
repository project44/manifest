import { background } from './background';
import { border } from './border';
import { brand } from './brand';
import { dataViz } from './data-viz';
import { palette } from './palette';
import { primary } from './primary';
import { text } from './text';

export const color = {
	background,
	border,
	brand,
	dataViz,
	palette,
	primary,
	text,
};

export type ColorTokens = typeof color;
