import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { StyledDialogContent } from './DialogContent.styles';
import type { DialogContentElement, DialogContentProps } from './DialogContent.types';

export const DialogContent = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-dialog-content', classNameProp);

  return (
    <StyledDialogContent {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledDialogContent>
  );
}) as ForwardRefComponent<DialogContentElement, DialogContentProps>;
