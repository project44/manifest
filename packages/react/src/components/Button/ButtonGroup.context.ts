import * as React from 'react';

interface ButtonGroupContext {
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
}

export const ButtonGroupContext = React.createContext<ButtonGroupContext>({});

export const useButtonGroup = () => React.useContext(ButtonGroupContext);
