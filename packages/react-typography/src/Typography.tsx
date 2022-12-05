import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledTypography } from './Typography.styles';
import type { TypographyElement, TypographyProps } from './Typography.types';

const variantMap = {
  body: 'p',
  bodyBold: 'p',
  caption: 'span',
  captionBold: 'span',
  display: 'h1',
  heading: 'h2',
  subtext: 'span',
  subtextBold: 'span',
  subtitle: 'h4',
  title: 'h3',
} as const;

export const Typography = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, paragraph, variant = 'body', ...other } = props;

  const Comp = as ?? (paragraph ? 'p' : variantMap[variant]);

  return (
    <StyledTypography
      {...other}
      ref={forwardedRef}
      as={Comp}
      className={cx('manifest-typography', classNameProp)}
      css={css}
      paragraph={paragraph}
      variant={variant}
    />
  );
}) as ForwardRefComponent<TypographyElement, TypographyProps>;
