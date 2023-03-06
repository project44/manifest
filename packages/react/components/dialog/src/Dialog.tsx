import * as React from 'react';
import { useDialog } from '@react-aria/dialog';
import { Modal } from '@project44-manifest/react-modal';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { mergeProps } from '@project44-manifest/react-utils';
import { useMergedRef } from '@project44-manifest/use-merged-ref';
import { DialogProvider } from './Dialog.context';
import { StyledDialog } from './Dialog.styles';
import type { DialogElement, DialogProps } from './Dialog.types';

/**
 * Dialog implementation; Need to initialize the modal component before calling
 * any dialog related hooks to ensure focus states are managed correctly.
 *
 * @private
 */
const DialogImpl = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    css,
    isDismissable,
    onClose,
    role = 'dialog',
    ...other
  } = props;

  const dialogRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(dialogRef, forwardedRef);

  const { dialogProps, titleProps } = useDialog({ role }, dialogRef);

  const context = React.useMemo(
    () => ({
      isDismissable,
      titleProps,
      onClose,
    }),
    [isDismissable, onClose, titleProps],
  );

  const className = cx('manifest-dialog', classNameProp);

  return (
    <DialogProvider value={context}>
      <StyledDialog
        {...mergeProps(dialogProps, other)}
        ref={mergedRef}
        as={as}
        className={className}
        css={css}
      >
        {children}
      </StyledDialog>
    </DialogProvider>
  );
}) as ForwardRefComponent<DialogElement, DialogProps>;

export const Dialog = React.forwardRef((props, forwardedRef) => {
  const {
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isOpen,
    onClose,
    ...other
  } = props;

  return (
    <Modal
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DialogImpl {...other} isDismissable={isDismissable} onClose={onClose} />
    </Modal>
  );
}) as ForwardRefComponent<DialogElement, DialogProps>;
