import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledActionCardImage } from './ActionCardImage.styles';
import type { ActionCardImageElement, ActionCardImageProps } from './ActionCardImage.types';

export const ActionCardImage = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, size = 'large', src, ...other } = props;

  const className = cx('manifest-action-card-image', classNameProp, {
    [`manifest-action-card-image--${size}`]: size,
  });

  return (
    <StyledActionCardImage
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={{ ...css, backgroundImage: `url(${src})` }}
      size={size}
    />
  );
}) as ForwardRefComponent<ActionCardImageElement, ActionCardImageProps>;
