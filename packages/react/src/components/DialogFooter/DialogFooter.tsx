import * as React from 'react';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { ButtonGroup } from '../button';
import { StyledDialogFooter } from './DialogFooter.styles';
import type { DialogFooterElement, DialogFooterProps } from './DialogFooter.types';

export const DialogFooter = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, buttonGroupProps = {}, ...other } = props;

  const className = cx('manifest-dialog-footer', classNameProp);

  return (
    <StyledDialogFooter {...other} ref={forwardedRef} as={as} className={className} css={css}>
      <ButtonGroup className="manifest-dialog-footer__button-group" {...buttonGroupProps}>
        {children}
      </ButtonGroup>
    </StyledDialogFooter>
  );
}) as ForwardRefComponent<DialogFooterElement, DialogFooterProps>;
