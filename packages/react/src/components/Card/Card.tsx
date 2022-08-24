import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Card.styles';

export type CardProps = StyleProps;

export const Card = createComponent<'div', CardProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-card')} ref={forwardedRef} />
  );
});
