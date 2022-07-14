import type { ButtonSize, ButtonVariant } from './types';
import * as React from 'react';

export interface ButtonGroupContext {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const ButtonGroupContext = React.createContext<ButtonGroupContext>({});

export const useButtonGroup = () => React.useContext(ButtonGroupContext);
