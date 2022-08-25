import { DOMProps, StyleProps } from '../../../types';
import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
interface PaginationItemProps extends AriaButtonProps, DOMProps, StyleProps {
    children?: React.ReactNode;
    isActive?: boolean;
}
declare const PaginationItem: React.ForwardRefExoticComponent<PaginationItemProps & React.RefAttributes<HTMLButtonElement>>;
export { PaginationItem };
export type { PaginationItemProps };
//# sourceMappingURL=PaginationItem.d.ts.map