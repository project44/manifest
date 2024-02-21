import React from 'react';
import { ForwardRefComponent } from '@project44-manifest/react-types';
import { DialogElement } from '../Dialog/Dialog.types';
import { DialogV2Wrapper } from './dialogv2.styles';
import { DialogHeader } from '../DialogHeader';
import { DialogContent } from '../DialogContent';
import { DialogFooter } from '../DialogFooter';
import { cx } from '@project44-manifest/react-styles';
import { useMergedRef } from '../../hooks';
import { useDialog } from '@react-aria/dialog';
import { DialogProvider } from '../Dialog/Dialog.context';
import { mergeProps } from '@react-aria/utils';
import { Modal } from '../Modal';
import { ModalPosition } from '../Modal/Modal.types';

export enum DialogV2Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface DialogV2Props {
  isOpen?: boolean;
  headerProps: {
    title: string;
    onClose: () => void;
  };
  body: string | React.ReactNode;
  footer?: string | React.ReactNode;
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  size?: DialogV2Size;
  edgeToEdge?: boolean;
  position?: ModalPosition;
}

export const DialogV2Impl = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className: classNameProp,
    isDismissable,
    headerProps,
    body,
    footer,
    edgeToEdge,
    size = DialogV2Size.medium,
    ...other
  } = props;

  const { title, onClose } = headerProps;

  const dialogRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(dialogRef, forwardedRef);

  const { dialogProps, titleProps } = useDialog({ role: 'dialog' }, dialogRef);

  const context = React.useMemo(
    () => ({
      isDismissable,
      titleProps,
      onClose,
    }),
    [isDismissable, onClose, titleProps],
  );

  const className = cx('manifest-dialog', classNameProp, {
    [`manifest-dialog-${size}`]: size,
    [`manifest-dialog-edgeToEdge`]: edgeToEdge,
  });

  return (
    <DialogProvider value={context}>
      <DialogV2Wrapper
        {...mergeProps(dialogProps, other)}
        ref={mergedRef}
        as={as}
        className={className}
        size={size}
        edgeToEdge={edgeToEdge ? 'noPadding' : undefined}
        data-testid={'dialogV2Wrapper'}
      >
        <DialogHeader data-testid={'dialogV2Header'}>{title}</DialogHeader>
        <DialogContent data-testid={'dialogV2Content'}>{body}</DialogContent>
        {footer && <DialogFooter data-testid={'dialogV2Footer'}>{footer}</DialogFooter>}
      </DialogV2Wrapper>
    </DialogProvider>
  );
}) as ForwardRefComponent<DialogElement, DialogV2Props>;

DialogV2Impl.displayName = 'DialogImpl';

export const DialogV2 = React.forwardRef((props, forwardedRef) => {
  const {
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    isOpen,
    position,
    ...other
  } = props;

  const { onClose } = other.headerProps;
  return (
    <Modal
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      isOpen={isOpen}
      onClose={onClose}
      data-testid="dialogV2Modal"
      position={position}
    >
      <DialogV2Impl {...other} isDismissable={isDismissable} />
    </Modal>
  );
}) as ForwardRefComponent<DialogElement, DialogV2Props>;

DialogV2.displayName = 'DialogV2';
