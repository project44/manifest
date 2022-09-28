import type { ButtonSize, ButtonVariant } from '../Button';
import { createContext, useContext } from 'react';

export interface ButtonGroupContext {
	isDisabled?: boolean;
	size?: ButtonSize;
	variant?: ButtonVariant;
}

export const ButtonGroupContext = createContext<ButtonGroupContext>({});

export const useButtonGroup = () => useContext(ButtonGroupContext);
