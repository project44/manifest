import { createContext, useContext } from 'react';
import type { RadioGroupState } from '@react-stately/radio';

export interface RadioGroupContext {
  state: RadioGroupState;
}

export const RadioGroupContext = createContext<RadioGroupContext | null>(null);

export const useRadioGroupContext = () => useContext(RadioGroupContext);
