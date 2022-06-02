import * as React from 'react';
import { CSS, VariantProps, TypographyVariant } from '../../styles';
import { StyledTypography } from './Typography.styles';

export interface TypographyProps
  extends React.ComponentProps<typeof StyledTypography>,
    VariantProps<typeof StyledTypography> {
  /**
   * Styles applied to the typography element.
   */
  css?: CSS;
}

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

export const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>((props, ref) => {
  const { variant = 'body', ...other } = props;

  const tag = React.useMemo(() => tagMap[variant as TypographyVariantTags] ?? 'span', [variant]);

  return <StyledTypography {...other} as={tag} variant={variant} ref={ref} />;
});
