import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Container.styles';

type ContainerElement = React.ElementRef<'div'>;

interface ContainerProps extends DOMProps, StyleProps {
  /**
   * The content of the container
   */
  children?: React.ReactNode;
}

const Container = React.forwardRef<ContainerElement, ContainerProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div
      {...other}
      className={cx(className, classNameProp, 'manifest-container')}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  Container.displayName = 'ManifestContainer';
}

export { Container };
export type { ContainerProps };
