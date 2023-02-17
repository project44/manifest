import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledMenu } from './Menu.styles';
import type { MenuElement, MenuProps } from './Menu.types';

export const Menu = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-menu-header', classNameProp);

  return (
    <StyledMenu {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledMenu>
  );
}) as ForwardRefComponent<MenuElement, MenuProps>;
