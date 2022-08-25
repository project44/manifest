import type { DOMProps, StyleProps } from '../../../types';
import type { AriaListBoxProps } from '@react-types/listbox';
import type { ListState } from '@react-stately/list';
import * as React from 'react';
interface ListBoxBaseProps extends AriaListBoxProps<object>, DOMProps, StyleProps {
    state: ListState<object>;
}
declare const ListBoxBase: React.ForwardRefExoticComponent<ListBoxBaseProps & React.RefAttributes<HTMLDivElement>>;
export { ListBoxBase };
export type { ListBoxBaseProps };
//# sourceMappingURL=ListBoxBase.d.ts.map