import type { ToastOptions as HotToastOptions } from 'react-hot-toast';
import hotToast from 'react-hot-toast/headless';
import type { ToastOptions, ToastVariant } from './Toast.types';

type ToastHandler = (message: string, options?: Omit<ToastOptions, 'message'>) => string;

const createHandler =
  (variant: ToastVariant): ToastHandler =>
  (message, options) =>
    hotToast(message, { ...options, variant } as HotToastOptions);

const toast = (...args: Parameters<ToastHandler>): string =>
  hotToast(...(args as Parameters<typeof hotToast>));

toast.error = createHandler('error');
toast.info = createHandler('info');
toast.success = createHandler('success');
toast.warning = createHandler('warning');
toast.dismiss = hotToast.dismiss;
toast.remove = hotToast.remove;

export { toast };
