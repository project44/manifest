import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './Card.styles';

type CardElement = React.ElementRef<'div'>;

interface CardProps extends DOMProps, StyleProps {
  /**
   * The content of the card.
   */
  children?: React.ReactNode;
}

const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div {...other} className={cx(className, classNameProp, 'manifest-card')} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Card.displayName = 'ManifestCard';
}

export { Card };
export type { CardProps };
