import * as React from 'react';
import { mergeProps } from '@react-aria/utils';
import { useVisuallyHidden } from '@react-aria/visually-hidden';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledVisuallyHidden } from './VisuallyHidden.styles';
import { VisuallyHiddenElement, VisuallyHiddenProps } from './VisuallyHidden.types';

export const VisuallyHidden = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const { visuallyHiddenProps } = useVisuallyHidden(props);

  const classes = cx('manifest-visually-hidden', classNameProp);

  return (
    <StyledVisuallyHidden
      className={classes}
      {...mergeProps(visuallyHiddenProps, other)}
      ref={forwardedRef}
      css={css}
    >
      {children}
    </StyledVisuallyHidden>
  );
}) as ForwardRefComponent<VisuallyHiddenElement, VisuallyHiddenProps>;
