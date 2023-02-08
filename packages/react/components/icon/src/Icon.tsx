import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledIcon } from './Icon.styles';
import type { IconElement, IconProps } from './Icon.types';

export const Icon = React.forwardRef((props, forwardedRef) => {
  const {
    'aria-label': ariaLabel,
    'aria-hidden': ariaHiddenProp,
    as: Comp,
    className: classNameProp,
    css,
    size = 'large',
    viewBox = '0 0 24 24',
    ...other
  } = props;

  let ariaHidden = ariaHiddenProp;

  if (!ariaHidden) {
    ariaHidden = undefined;
  }

  const classes = cx('manifest-icon', classNameProp, {
    [`manifest-icon--${size}`]: size,
  });

  return (
    <StyledIcon
      {...other}
      ref={forwardedRef}
      aria-hidden={ariaLabel ? ariaHidden ?? undefined : true}
      aria-label={ariaLabel}
      as={Comp}
      className={classes}
      css={css}
      focusable={false}
      role="img"
      size={size}
      viewBox={viewBox}
    />
  );
}) as ForwardRefComponent<IconElement, IconProps>;
