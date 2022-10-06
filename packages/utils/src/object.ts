import { isObject } from './assertions';

export function flattenDeep<K extends string = string>(
	record: Record<string, unknown>,
): Record<K, boolean | number | string> {
	const result: Record<string, boolean | number | string> = {};

	function flatten(obj: Record<string, unknown>, prev?: string) {
		Object.entries(obj).forEach(([key, value]) => {
			const fullKey = prev != null ? `${prev}-${key}` : key;

			if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
				result[fullKey] = value;
			} else if (isObject(value)) {
				flatten(value, fullKey);
			}
		});
	}

	flatten(record);

	return result as Record<K, boolean | number | string>;
}
