import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './CardFooter.styles';

type CardFooterElement = React.ElementRef<'div'>;

interface CardFooterProps extends DOMProps, StyleProps {
  /**
   * The card actions.
   */
  children?: React.ReactNode;
}

const CardFooter = React.forwardRef<CardFooterElement, CardFooterProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div
      {...other}
      className={cx(className, classNameProp, 'manifest-card-footer')}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardFooter.displayName = 'ManifestCardFooter';
}

export { CardFooter };
export type { CardFooterProps };
