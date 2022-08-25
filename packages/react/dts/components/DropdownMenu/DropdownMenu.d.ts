import type { DOMProps, StyleProps } from '../../types';
import type { AriaMenuProps } from '@react-types/menu';
import * as React from 'react';
interface DropdownMenuProps extends AriaMenuProps<object>, DOMProps, StyleProps {
}
declare const DropdownMenu: React.ForwardRefExoticComponent<DropdownMenuProps & React.RefAttributes<HTMLUListElement>>;
export { DropdownMenu };
export { DropdownMenuProps };
//# sourceMappingURL=DropdownMenu.d.ts.map