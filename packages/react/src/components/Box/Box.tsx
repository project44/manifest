import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Box.styles';

export type BoxProps = StyleProps;

export const Box = createComponent<'div', BoxProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-box')} ref={forwardedRef} />
  );
});
