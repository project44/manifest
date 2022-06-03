import * as React from 'react';
import { cx, VariantProps, TypographyVariant } from '../../styles';
import { ManifestProps } from '../../types';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps
  extends ManifestProps,
    VariantProps<typeof StyledTypography>,
    React.ComponentProps<typeof StyledTypography> {}

type TypographyVariantTags = Exclude<TypographyVariant, 'body-bold'> | 'bodyBold';
type TypographyTagMap = {
  [key in TypographyVariantTags]: keyof JSX.IntrinsicElements;
};

const tagMap: TypographyTagMap = {
  display: 'h1',
  heading: 'h2',
  title: 'h3',
  subtitle: 'h4',
  body: 'p',
  bodyBold: 'p',
  subtext: 'span',
  caption: 'span',
};

export const Typography = React.forwardRef<
  React.ElementRef<typeof StyledTypography>,
  TypographyProps
>((props, ref) => {
  const { className, variant = 'body', ...other } = props;

  const tag = React.useMemo(() => tagMap[variant as TypographyVariantTags] ?? 'span', [variant]);

  return (
    <StyledTypography
      {...other}
      as={tag}
      className={cx('manifest-typography', className)}
      ref={ref}
      variant={variant}
    />
  );
});
