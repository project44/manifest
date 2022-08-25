import type { DOMProps, StyleProps } from '../../../types';
import type { Node } from '@react-types/shared';
import type { TreeState } from '@react-stately/tree';
import * as React from 'react';
interface DropdownSectionProps<T extends object = object> extends DOMProps, StyleProps {
    children?: React.ReactNode;
    item: Node<T>;
    state: TreeState<T>;
    title?: React.ReactNode;
    onAction?(key: React.Key): void;
}
declare const DropdownSection: React.FC<DropdownSectionProps>;
export { DropdownSection };
export { DropdownSectionProps };
//# sourceMappingURL=DropdownSection.d.ts.map