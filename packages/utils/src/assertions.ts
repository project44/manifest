/**
 * Determine whether a collection is an object.
 */
export function isObject(obj: unknown): obj is Record<string, unknown> {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		obj.constructor === Object &&
		Object.prototype.toString.call(obj) === '[object Object]'
	);
}
