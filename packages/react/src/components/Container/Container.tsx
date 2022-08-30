import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Container.styles';

export type ContainerProps = StyleProps;

export const Container = createComponent<'div', ContainerProps>((props, forwardedRef) => {
  const { as: Comp = 'div', className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp
      {...other}
      className={cx(className, classNameProp, 'manifest-container')}
      ref={forwardedRef}
    />
  );
});
