import isObject from 'lodash.isobject';
import kebabCase from 'lodash.kebabcase';

/**
 * Flatten a token object into an object of kebab-case keys for use within our style provider.
 */
export function flattenTokens<K extends string = string>(
  record: Record<string, unknown>,
): Record<K, boolean | number | string> {
  const result: Record<string, boolean | number | string> = {};

  function flatten(obj: Record<string, unknown>, prev?: string) {
    for (const [key, value] of Object.entries(obj)) {
      const processedKey = kebabCase(key);
      // Updated eslint rules and this was flagged
      // to prevent any potential breakages we should come back
      // and fix this logic.
      // eslint-disable-next-line eqeqeq
      const fullKey = prev == undefined ? processedKey : `${prev}-${processedKey}`;

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        result[fullKey] = value;
      } else if (isObject(value)) {
        flatten(value as Record<string, unknown>, fullKey);
      }
    }
  }

  flatten(record);

  return result as Record<K, boolean | number | string>;
}
