import * as React from 'react';
import { useToaster } from 'react-hot-toast/headless';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import type { ToastOptions } from '../Toast';
import { Toast } from '../Toast';
import { StyledToaster } from './Toaster.styles';
import type { ToasterElement, ToasterProps } from './Toaster.types';

const getPositionStyle = (offset: number): React.CSSProperties => ({
  position: 'absolute',
  right: 0,
  top: 0,
  transform: `translateY(${Number(offset)}px)`,
  transition: 'all 200ms cubic-bezier(0.4, 0.14, 0.3, 1)',
});

export const Toaster = React.forwardRef((props, forwardedRef) => {
  const { as, className: classNameProp, css: cssProp, duration = 5000, ...other } = props;

  const { toasts, handlers } = useToaster({ duration });

  const { endPause, startPause, updateHeight } = handlers;

  const classes = cx('manifest-toaster', classNameProp);

  const handleMouseEnter = React.useCallback(() => {
    startPause();
  }, [startPause]);

  const handleMouseLeave = React.useCallback(() => {
    endPause();
  }, [endPause]);

  return (
    <StyledToaster
      {...other}
      ref={forwardedRef}
      as={as}
      className={classes}
      css={cssProp}
      role="region"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toasts.map((toast) => {
        const { id, visible, ...rest } = toast;

        const {
          action,
          className,
          css,
          description,
          dismissButtonProps,
          isDismissable,
          message,
          onDismiss,
          variant,
        } = rest as ToastOptions;

        const offset = handlers.calculateOffset(toast, {
          gutter: 8,
          defaultPosition: 'top-right',
        });

        const styles = getPositionStyle(offset);

        const toastRef = (element: HTMLElement | null) => {
          if (element && typeof toast.height !== 'number') {
            const { height } = element.getBoundingClientRect();

            updateHeight(toast.id, height);
          }
        };

        return (
          <Toast
            key={toast.id}
            ref={toastRef}
            action={action}
            className={className}
            css={css}
            description={description}
            dismissButtonProps={dismissButtonProps}
            id={id}
            isDismissable={isDismissable}
            isVisible={visible}
            message={message}
            style={styles}
            variant={variant}
            onDismiss={onDismiss}
          />
        );
      })}
    </StyledToaster>
  );
}) as ForwardRefComponent<ToasterElement, ToasterProps>;
