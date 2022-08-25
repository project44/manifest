import type { ListState } from '@react-stately/list';
import * as React from 'react';
export interface ListBoxContext<T extends object = object> {
    state: ListState<T>;
}
export declare const ListBoxContext: React.Context<ListBoxContext<object> | null>;
export declare const useListBoxContext: () => ListBoxContext<object> | null;
//# sourceMappingURL=ListBoxContext.d.ts.map