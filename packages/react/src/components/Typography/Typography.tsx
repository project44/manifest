import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Typography.styles';

type TypographyElement = React.ElementRef<'span'>;

interface TypographyProps extends DOMProps, StyleProps {
  /**
   * The text content of the typography component.
   */
  children?: React.ReactNode;
  /**
   * The display variant of the text.
   *
   * @default 'primary'
   */
  variant?:
    | 'body'
    | 'bodyBold'
    | 'caption'
    | 'captionBold'
    | 'display'
    | 'heading'
    | 'subtext'
    | 'subtextBold'
    | 'subtitle'
    | 'title';
}

const Typography = React.forwardRef<TypographyElement, TypographyProps>((props, forwardedRef) => {
  const { className: classNameProp, css, variant = 'body', ...other } = props;

  const { className } = useStyles({ css, variant });

  const classes = cx(className, classNameProp, {
    'manifest-typography': true,
    [`manifest-typography--${variant}`]: variant,
  });

  return <span {...other} className={classes} ref={forwardedRef} />;
});

if (__DEV__) {
  Typography.displayName = 'ManifestTypography';
}

export { Typography };
export type { TypographyProps };
