import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './CardFooter.styles';

export type CardFooterProps = StyleProps;

export const CardFooter = createComponent<'div', CardFooterProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp
      {...other}
      className={cx(className, classNameProp, 'manifest-card-footer')}
      ref={forwardedRef}
    />
  );
});
