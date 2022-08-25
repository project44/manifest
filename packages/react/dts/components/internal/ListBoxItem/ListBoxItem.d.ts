import type { DOMProps, StyleProps } from '../../../types';
import type { FocusableProps } from '@react-types/shared';
import type { Node } from '@react-types/shared';
import * as React from 'react';
interface ListBoxItemProps<T extends object = object> extends DOMProps, StyleProps, FocusableProps {
    children?: React.ReactNode;
    isVirtualized?: boolean;
    item: Node<T>;
    startIcon?: React.ReactElement;
    onAction?(key: React.Key): void;
}
declare const ListBoxItem: React.FC<ListBoxItemProps>;
export { ListBoxItem };
export type { ListBoxItemProps };
//# sourceMappingURL=ListBoxItem.d.ts.map