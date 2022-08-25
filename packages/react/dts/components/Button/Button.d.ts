import type { ButtonSize, ButtonVariant } from './types';
import type { AriaButtonProps } from '@react-types/button';
import type { StyleProps } from '../../types';
import * as React from 'react';
export interface ButtonProps extends AriaButtonProps, StyleProps {
    endIcon?: React.ReactElement;
    isDisabled?: boolean;
    size?: ButtonSize;
    startIcon?: React.ReactElement;
    variant?: ButtonVariant;
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}
export declare const Button: import("@project44-manifest/system").Component<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map