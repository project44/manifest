import * as React from 'react';
import {
  BackslashCircleFilled,
  CheckCircleFilled,
  Close,
  ExclamationPointTriangleFilled,
  InfoCircleFilled,
} from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { Typography } from '../Typography';
import {
  StyledToast,
  StyledToastActions,
  StyledToastContainer,
  StyledToastDescription,
  StyledToastDismissButton,
} from './Toast.styles';
import type { ToastElement, ToastProps, ToastVariant } from './Toast.types';
import { toast } from './utils';

const variantIcon: Record<ToastVariant, React.ElementType | null> = {
  info: InfoCircleFilled,
  warning: ExclamationPointTriangleFilled,
  error: BackslashCircleFilled,
  success: CheckCircleFilled,
  default: null,
};

export const Toast = React.forwardRef((props, forwardedRef) => {
  const {
    action,
    as,
    children,
    className: classNameProp,
    css,
    dismissButtonProps = {},
    id,
    isDismissable = true,
    isVisible,
    onDismiss,
    description,
    message,
    variant = 'default',
    ...other
  } = props;

  const className = cx('manifest-toast', classNameProp);

  const Icon = variantIcon[variant];

  const handleDismiss = React.useCallback(() => {
    toast.dismiss(id);

    onDismiss?.();
  }, [id, onDismiss]);

  return (
    <StyledToast
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      isVisible={isVisible}
      role="alert"
      variant={variant}
    >
      {Icon && <Icon className="manifest-toast__icon" viewBox="0 0 32 32" />}
      <StyledToastContainer className="manifest-toast__container">
        <Typography className="manifest-toast__message" variant="bodyBold">
          {message}
        </Typography>
        {description && (
          <StyledToastDescription className="manifest-toast__description" variant="subtext">
            {description}
          </StyledToastDescription>
        )}
        {action && (
          <StyledToastActions className="manifest-toast__actions">{action}</StyledToastActions>
        )}
      </StyledToastContainer>
      {isDismissable && (
        <StyledToastDismissButton
          className="manifest-toast__dismiss-button"
          variant="tertiary"
          onPress={handleDismiss}
          {...dismissButtonProps}
        >
          <Close />
        </StyledToastDismissButton>
      )}
    </StyledToast>
  );
}) as ForwardRefComponent<ToastElement, ToastProps>;

Toast.displayName = 'Toast';
