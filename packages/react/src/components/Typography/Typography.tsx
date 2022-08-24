import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Typography.styles';

export interface TypographyProps extends StyleProps {
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

export const Typography = createComponent<'span', TypographyProps>((props, forwardedRef) => {
  const { as: Comp = 'span', className: classNameProp, css, variant = 'body', ...other } = props;

  const { className } = useStyles({ css, variant });

  const classes = cx(className, classNameProp, {
    'manifest-typography': true,
    [`manifest-typography--${variant}`]: variant,
  });

  return <Comp {...other} className={classes} ref={forwardedRef} />;
});
