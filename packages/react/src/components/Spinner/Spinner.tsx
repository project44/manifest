import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledSpinner } from './Spinner.styles';
import type { SpinnerElement, SpinnerProps } from './Spinner.types';

export const Spinner = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css, size = 'large', ...other } = props;

  const className = cx('manifest-spinner', classNameProp);

  return (
    <StyledSpinner
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      size={size}
    />
  );
}) as ForwardRefComponent<SpinnerElement, SpinnerProps>;

Spinner.displayName = 'Spinner';
