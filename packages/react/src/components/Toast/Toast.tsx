import * as React from 'react';
import { useStyles } from './styles';
import { Portal } from '../Portal';
import { Icon } from '../Icon';
import { DOMProps, StyleProps } from '../../types';
import { cx } from '../../styles';

type ToastElement = React.ElementRef<'div'>;

interface ToastProps extends DOMProps, StyleProps {
  /**
   * Toast content
   *
   */
  children: React.ReactNode;
  /**
   * Color style
   *
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /**
   * Action buttons array
   *
   */
  actions?: { title: string; callback: () => void }[];
  /**
   * Auto dismiss timemout. No auto-dismiss if not set
   */
  timeout?: number;
  /**
   * Allow dismiss button
   *
   * @default 'true'
   */
  isDissmissable?: boolean;
}

const Toast = React.forwardRef<ToastElement, ToastProps>((props: ToastProps, forwardedRef) => {
  const {
    children,
    variant = 'default',
    actions,
    timeout,
    isDissmissable = true,
    className: classNameProp,
    css,
    ...other
  } = props;

  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const close = () => setIsVisible(false);

  const renderActions = () => (
    <div className="manifest-toast_actions">
      {actions?.map(action => {
        return (
          <button role="button" onClick={action.callback}>
            {action.title}
          </button>
        );
      })}
    </div>
  );

  React.useEffect(() => {
    if (timeout) setTimeout(close, timeout);
  }, [timeout]);

  if (!isVisible) return null;

  const { className } = useStyles({ css, variant });
  const classes = cx(className, classNameProp);

  return (
    <Portal>
      <div {...other} role="presentation" className={classes} ref={forwardedRef}>
        <div className="manifest-toast_body">{children}</div>
        <div className="manifest-toast_controls">
          {actions && renderActions()}
          {isDissmissable && (
            <button role="button" className="manifest-toast_close" onClick={close}>
              <Icon icon="close" />
            </button>
          )}
        </div>
      </div>
    </Portal>
  );
});

if (__DEV__) {
  Toast.displayName = 'ManifestToast';
}

export { Toast };
export type { ToastProps };
