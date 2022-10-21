import { ButtonElement, ButtonProps } from './Button.types';

export type IconButtonElement = ButtonElement;

export interface IconButtonProps extends Omit<ButtonProps, 'endIcon' | 'startIcon'> {}
