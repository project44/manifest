import * as React from 'react';
import { CSS, cx, useSeparatorStyles } from './Separator.styles';
import { mergeProps } from '@react-aria/utils';
import { useSeparator } from '@react-aria/separator';

/**
 * -----------------------------------------------------------------------------------------------
 * Select
 * -----------------------------------------------------------------------------------------------
 */

type SeparatorElement = React.ElementRef<'span'>;
type SeparatorNativeProps = React.ComponentPropsWithRef<'span'>;

interface SeparatorProps extends SeparatorNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The orientation of the separator.
   *
   * @default 'horizontal
   */
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<SeparatorElement, SeparatorProps>((props, forwardedRef) => {
  const { className: classNameProp, css, orientation = 'horizontal', ...other } = props;

  const Comp = orientation === 'vertical' ? 'div' : 'hr';

  const { separatorProps } = useSeparator({
    ...props,
    elementType: Comp,
  });

  const { className } = useSeparatorStyles({ css, orientation });

  return (
    <Comp
      {...mergeProps(separatorProps, other)}
      className={cx('manifest-separator', className, classNameProp)}
      // @ts-expect-error: https://github.com/Microsoft/TypeScript/issues/28892
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  Separator.displayName = 'ManifestSeparator';
}

Separator.toString = () => '.manifest-separator';

export { Separator };
export type { SeparatorProps };
