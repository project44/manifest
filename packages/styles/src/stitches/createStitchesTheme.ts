import isObject from 'lodash.isobject';
import kebabCase from 'lodash.kebabcase';
import type { Theme } from '@project44-manifest/theme';
import { StitchesTheme } from '../types';

function flattenTokens<K extends string = string>(
  record: Record<string, unknown>,
): Record<K, boolean | number | string> {
  const result: Record<string, boolean | number | string> = {};

  function flatten(obj: Record<string, unknown>, prev?: string) {
    for (const [key, value] of Object.entries(obj)) {
      const processedKey = kebabCase(key);
      const fullKey = prev === undefined ? processedKey : `${prev}-${processedKey}`;

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

export function createStitchesTheme(theme: Theme): StitchesTheme {
  const result: StitchesTheme = {};

  for (const category in theme) {
    if (category) {
      result[category as keyof StitchesTheme] = flattenTokens(theme[category as keyof Theme]);
    }
  }

  return result;
}
