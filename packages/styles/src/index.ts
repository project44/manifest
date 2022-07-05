export * from './config';
export * from './shared';

export { default as cx } from 'clsx';

export const pxToRem = (value: number) => `${value / 16}rem`;

export type { TypographyVariant } from './utils/typography';
