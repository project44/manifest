import type { TransformedTokens } from 'style-dictionary/types/TransformedToken';

export function formatTokens(token: TransformedTokens) {
  if ('value' in token) return token.value;

  if (typeof token !== 'object') return token;

  const result: Record<string, unknown> = {};

  for (const [prop, value] of Object.entries(token)) {
    result[prop] = formatTokens(value);
  }

  return result;
}
