import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
import { cx } from '../../styles';
import { useStyles } from './CardHeader.styles';

type CardHeaderElement = React.ElementRef<'div'>;

interface CardHeaderProps extends DOMProps, StyleProps {
  /**
   * The content of the card header.
   */
  children?: React.ReactNode;
}

const CardHeader = React.forwardRef<CardHeaderElement, CardHeaderProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useStyles({ css });

  return (
    <div
      {...other}
      className={cx(className, classNameProp, 'manifest-card-header')}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardHeader.displayName = 'ManifestCardHeader';
}

export { CardHeader };
export type { CardHeaderProps };
