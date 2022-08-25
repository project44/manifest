import type { DOMProps, StyleProps } from '../../../types';
import type { Node } from '@react-types/shared';
import * as React from 'react';
interface ListBoxSectionProps<T extends object = object> extends DOMProps, StyleProps {
    children?: React.ReactNode;
    item: Node<T>;
    title?: React.ReactNode;
}
declare const ListBoxSection: React.FC<ListBoxSectionProps>;
export { ListBoxSection };
export type { ListBoxSectionProps };
//# sourceMappingURL=ListBoxSection.d.ts.map