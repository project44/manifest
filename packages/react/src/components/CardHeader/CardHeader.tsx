import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './CardHeader.styles';

export type CardHeaderProps = StyleProps;

export const CardHeader = createComponent<'div', CardHeaderProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp
      {...other}
      className={cx(className, classNameProp, 'manifest-card-header')}
      ref={forwardedRef}
    />
  );
});
