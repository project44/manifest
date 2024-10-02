import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '../../system';
import type { StyleProps } from '../../types';
import { useStyles } from './Typography.styles';

export type TypographyElement = 'span';

export interface TypographyOptions<T extends As = TypographyElement>
  extends Options<T>,
    StyleProps {
  /**
   * The display variant of the text.
   *
   * @default 'body'
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

  /**
   * The display color of the text.
   */
  color?: 'primary' | 'secondary' | 'tertiary';
}

export type TypographyProps<T extends As = TypographyElement> = Props<TypographyOptions<T>>;

export const Typography = createComponent<TypographyOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'span',
    className: classNameProp,
    css,
    variant = 'body',
    color = undefined,
    ...other
  } = props;

  const { className } = useStyles({ css, color, variant });

  const classes = cx(className, classNameProp, {
    'manifest-typography': true,
    [`manifest-typography--${variant}`]: variant,
  });

  return <Comp {...other} ref={forwardedRef} className={classes} />;
});

Typography.displayName = 'Typography';
