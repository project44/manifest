import type { RadioGroupState } from '@react-stately/radio';
import * as React from 'react';

export interface RadioGroupContext {
	state: RadioGroupState;
}

export const RadioGroupContext = React.createContext<RadioGroupContext | null>(null);

export const useRadioGroupContext = () => React.useContext(RadioGroupContext);
