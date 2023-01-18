import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledIcons } from './Icons.styles';
import type { IconsElement, IconsProps } from './Icons.types';

export const Icons = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-icons', classNameProp);

  return (
    <StyledIcons {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledIcons>
  );
}) as ForwardRefComponent<IconsElement, IconsProps>;
