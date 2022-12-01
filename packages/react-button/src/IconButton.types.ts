import type { ButtonElement, ButtonProps } from './Button.types';

export type IconButtonElement = ButtonElement;

export type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;
