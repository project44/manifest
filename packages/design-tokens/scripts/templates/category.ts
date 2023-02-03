import camelCase from 'lodash.camelcase';
import type { TransformedToken } from 'style-dictionary';

export const categoryTemplate = (categories: string[], tokens: TransformedToken[]) =>
  categories
    .map((category) => {
      const categoryTokens = tokens.filter((token) => token.attributes?.category === category);

      return `const ${camelCase(category)} = { ${categoryTokens
        .map((token) => `'${token.name.replace(`${category}-`, '')}': ${camelCase(token.name)},`)
        .join('\n')} };`;
    })
    .join('\n');
