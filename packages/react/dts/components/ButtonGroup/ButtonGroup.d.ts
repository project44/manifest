import type { ButtonSize, ButtonVariant } from '../Button';
import type { DOMProps, StyleProps } from '../../types';
import * as React from 'react';
interface ButtonGroupProps extends DOMProps, StyleProps {
    children?: React.ReactNode;
    isDisabled?: boolean;
    isAttached?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
}
declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;
export { ButtonGroup };
export type { ButtonGroupProps };
//# sourceMappingURL=ButtonGroup.d.ts.map