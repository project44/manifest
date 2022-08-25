import type { ButtonSize, ButtonVariant } from '../Button';
import * as React from 'react';
export interface ButtonGroupContext {
    isDisabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
}
export declare const ButtonGroupContext: React.Context<ButtonGroupContext>;
export declare const useButtonGroup: () => ButtonGroupContext;
//# sourceMappingURL=ButtonGroup.context.d.ts.map