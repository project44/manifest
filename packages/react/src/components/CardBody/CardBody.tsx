import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './CardBody.styles';

type CardBodyElement = React.ElementRef<'div'>;

interface CardBodyProps extends DOMProps, StyleProps {
  /**
   * The content of the card body.
   */
  children?: React.ReactNode;
}

const CardBody = React.forwardRef<CardBodyElement, CardBodyProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div
      {...other}
      className={cx(className, classNameProp, 'manifest-card-body')}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardBody.displayName = 'ManifestCardBody';
}

export { CardBody };
export type { CardBodyProps };
