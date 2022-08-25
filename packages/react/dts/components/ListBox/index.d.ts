import type { ListBoxItemProps } from '../internal/ListBoxItem';
import type { ListBoxSectionProps } from '../internal/ListBoxSection';
declare const ListBoxItem: (props: Omit<ListBoxItemProps, 'isVirtualized' | 'item' | 'onAction'>) => JSX.Element;
declare const ListBoxSection: (props: Omit<ListBoxSectionProps, 'item'>) => JSX.Element;
export { ListBoxItem, ListBoxSection };
export { ListBoxItemProps, ListBoxSectionProps };
export * from './ListBox';
//# sourceMappingURL=index.d.ts.map