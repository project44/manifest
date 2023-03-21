import type { DOMAttributes } from '@project44-manifest/react-types';
import { createContext } from '../../utils';

export interface DialogContext {
  isDismissable?: boolean;
  titleProps: DOMAttributes;
  onClose?: () => void;
}

export const [DialogProvider, useDialogContext] = createContext<DialogContext>({
  name: 'DialogContext',
});
