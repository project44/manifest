import { BASE_FONT_SIZE } from '../constants';

export const pxToRem = (value: number): string => `${value / BASE_FONT_SIZE}rem`;
