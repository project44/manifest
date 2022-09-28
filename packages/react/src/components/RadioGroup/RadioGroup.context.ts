import type { RadioGroupState } from '@react-stately/radio';
import { createContext, useContext } from 'react';

export interface RadioGroupContext {
	state: RadioGroupState;
}

export const RadioGroupContext = createContext<RadioGroupContext | null>(null);

export const useRadioGroupContext = () => useContext(RadioGroupContext);
