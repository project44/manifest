import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { useSeparator } from '@react-aria/separator';
import { useStyles } from './Separator.styles';

type SeparatorElement = React.ElementRef<'span'>;

interface SeparatorProps extends DOMProps, StyleProps {
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

  const { className } = useStyles({ css, orientation });

  const classes = cx(className, classNameProp, {
    'manifest-separator': true,
    [`manifest-separator--${orientation}`]: orientation,
  });

  return (
    <Comp
      {...mergeProps(separatorProps, other)}
      className={classes}
      // @ts-expect-error: https://github.com/Microsoft/TypeScript/issues/28892
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  Separator.displayName = 'ManifestSeparator';
}

export { Separator };
export type { SeparatorProps };
