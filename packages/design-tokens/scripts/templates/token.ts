import camelCase from 'lodash.camelcase';
import type { TransformedToken } from 'style-dictionary';

export const tokenTemplate = (tokens: TransformedToken[]) =>
  tokens.map((token) => `const ${camelCase(token.name)} = '${token.value}';`).join('\n');
