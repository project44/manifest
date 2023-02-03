import camelCase from 'lodash.camelcase';
import type { TransformedToken } from 'style-dictionary';

export const tokenNameTemplate = (tokens: TransformedToken[]) =>
  tokens.map((token) => `${camelCase(token.name)},`).join('\n');
