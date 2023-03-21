import { createContext } from '../../utils/context';
import type { ButtonSize, ButtonVariant } from '../Button/types';

export interface ButtonGroupContext {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const [ButtonGroupProvider, useButtonGroup] = createContext<ButtonGroupContext>({
  name: 'ButtonGroupContext',
});
