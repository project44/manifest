import * as React from 'react';
import { CSS, cx, useTypographyStyles } from './Typography.styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Typography
 * -----------------------------------------------------------------------------------------------
 */

type TypographyElement = React.ElementRef<'span'>;
type TypographyNativeProps = React.ComponentPropsWithRef<'span'>;

interface TypographyProps extends TypographyNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
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

  const { className } = useTypographyStyles({ css, variant });

  return (
    <span
      {...other}
      className={cx('manifest-typography', className, classNameProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  Typography.displayName = 'ManifestTypography';
}

Typography.toString = () => '.manifest-typography';

export { Typography };
export type { TypographyProps };
