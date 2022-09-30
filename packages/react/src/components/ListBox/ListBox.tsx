import { useListState } from '@react-stately/list';
import { As, createComponent, Props } from '@project44-manifest/system';
import { ListBoxBase, ListBoxBaseElement, ListBoxBaseOptions } from '../ListBoxBase';

export type ListBoxOptions<T extends As = ListBoxBaseElement> = Omit<
	ListBoxBaseOptions<T>,
	'state'
>;
export type ListBoxProps<T extends As = ListBoxBaseElement> = Props<ListBoxOptions<T>>;

export const ListBox = createComponent<ListBoxOptions>((props, forwardedRef) => {
	const state = useListState(props);

	return <ListBoxBase {...props} ref={forwardedRef} state={state} />;
});
