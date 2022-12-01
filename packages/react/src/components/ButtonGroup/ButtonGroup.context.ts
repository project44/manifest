import { createContext, useContext } from 'react';
import type { ButtonSize, ButtonVariant } from '../Button';

export interface ButtonGroupContext {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const ButtonGroupContext = createContext<ButtonGroupContext>({});

export const useButtonGroup = () => useContext(ButtonGroupContext);
