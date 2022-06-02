import * as React from 'react';
import { RadioGroupState } from '@react-stately/radio';

export interface RadioGroupContext {
  state: RadioGroupState;
}

export const RadioGroupContext = React.createContext<RadioGroupContext | null>(null);

export const useRadioGroup = () => React.useContext(RadioGroupContext);
