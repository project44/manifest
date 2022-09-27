import { Collection, Node } from '@react-types/shared';
import { ListCollection } from '@react-stately/list';

type FilterFn = (textValue: string, inputValue: string) => boolean;

/**
 * Pulled directly from react-aria for composing our own multi-select state for the combobox component.
 *
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/combobox/src/useComboBoxState.ts
 */
function filterNodes<T>(
	nodes: Iterable<Node<T>>,
	inputValue: string,
	filter: FilterFn,
): Iterable<Node<T>> {
	const filteredNode = [];

	for (const node of nodes) {
		if (node.type === 'section' && node.hasChildNodes) {
			const filtered = filterNodes(node.childNodes, inputValue, filter);

			if ([...filtered].length > 0) {
				filteredNode.push({ ...node, childNodes: filtered });
			}
		} else if (node.type !== 'section' && filter(node.textValue, inputValue)) {
			filteredNode.push({ ...node });
		}
	}

	return filteredNode;
}

export function filterCollection<T extends object>(
	collection: Collection<Node<T>>,
	inputValue: string,
	filter: FilterFn,
): Collection<Node<T>> {
	return new ListCollection(filterNodes(collection, inputValue, filter));
}
