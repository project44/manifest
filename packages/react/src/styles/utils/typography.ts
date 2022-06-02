import type * as Stitches from '@stitches/react';

export type TypographyVariant =
  | 'display'
  | 'heading'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'body-bold'
  | 'subtext'
  | 'caption';

type TypographyVariantToken = `$${TypographyVariant}`;

type TypographyVariants = {
  [variant in TypographyVariantToken]: Stitches.CSSProperties;
};

const variants: TypographyVariants = {
  $display: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$xx-large',
    fontWeight: '$bold',
    letterSpacing: '$x-small',
    lineHeight: '$xx-large',
  },
  $heading: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$x-large',
    fontWeight: '$semibold',
    letterSpacing: '$small',
    lineHeight: '$x-large',
  },
  $title: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$large',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$large',
  },
  $subtitle: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$bold',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  $body: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  '$body-bold': {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$medium',
    fontWeight: '$semibold',
    letterSpacing: '$medium',
    lineHeight: '$medium',
  },
  $subtext: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$small',
  },
  $caption: {
    color: '$text-primary',
    fontFamily: '$text',
    fontSize: '$x-small',
    fontWeight: '$regular',
    letterSpacing: '$medium',
    lineHeight: '$x-small',
  },
};

export const typography = (variant: TypographyVariantToken) => variants[variant];
