import type { ButtonElement, ButtonProps } from '../Button';

export type IconButtonElement = ButtonElement;

export type IconButtonProps = Omit<ButtonProps, 'endIcon' | 'startIcon'>;
