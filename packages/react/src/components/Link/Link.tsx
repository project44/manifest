import type { StyleProps } from '../../types';
import * as React from 'react';
import { createComponent } from '@project44-manifest/system';
import { cx } from '../../styles';
import { useStyles } from './Link.styles';

export type LinkProps = StyleProps;

export const Link = createComponent<'a', LinkProps>((props, forwardedRef) => {
  const { as: Comp = 'a', children, className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <Comp {...other} className={cx(className, classNameProp, 'manifest-link')} ref={forwardedRef}>
      {children}
    </Comp>
  );
});
