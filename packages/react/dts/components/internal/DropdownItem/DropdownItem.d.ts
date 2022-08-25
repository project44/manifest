import type { DOMProps, StyleProps } from '../../../types';
import type { FocusableProps } from '@react-types/shared';
import type { Node } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import * as React from 'react';
interface DropdownItemProps<T extends object = object> extends DOMProps, StyleProps, FocusableProps {
    children?: React.ReactNode;
    endIcon?: React.ReactElement;
    isVirtualized?: boolean;
    item: Node<T>;
    startIcon?: React.ReactElement;
    state: TreeState<T>;
    onAction?(key: React.Key): void;
}
declare const DropdownItem: React.FC<DropdownItemProps>;
export { DropdownItem };
export { DropdownItemProps };
//# sourceMappingURL=DropdownItem.d.ts.map