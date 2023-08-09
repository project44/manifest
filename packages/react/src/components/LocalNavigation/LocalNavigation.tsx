import * as React from 'react';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { createContext } from '../../utils/context';
import { StyledNavigation } from './LocalNavigation.styles';

export type LocalNavigationVariant = 'primary' | 'secondary';

/* -------------------------------------------------------------------------------------------------
 * LocalNavigationContext
 * -----------------------------------------------------------------------------------------------*/

interface LocalNavigationContext {
  variant?: LocalNavigationVariant;
}

export const [LocalNavigationProvider, useLocalNavigation] = createContext<LocalNavigationContext>({
  name: 'LocalNavigationContext',
});

/* -------------------------------------------------------------------------------------------------
 * LocalNavigation
 * -----------------------------------------------------------------------------------------------*/

export interface LocalNavigationProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * The display variant.
   *
   * @default 'primary'
   */
  variant?: LocalNavigationVariant;
}

export const LocalNavigation = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, variant = 'primary', ...other } = props;

  const context = React.useMemo(() => ({ variant }), [variant]);

  const className = cx('manifest-local-navigation', classNameProp);

  return (
    <StyledNavigation
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      variant={variant}
    >
      <LocalNavigationProvider value={context}>{children}</LocalNavigationProvider>
    </StyledNavigation>
  );
}) as ForwardRefComponent<'div', LocalNavigationProps>;
