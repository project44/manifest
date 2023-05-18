import { Format } from 'style-dictionary';
import { formatTokens } from '../utils';

export const typescriptDeclarations: Format = {
  name: 'typescript/declarations',
  formatter: ({ dictionary }) => {
    const tokens = dictionary.allTokens
      .map(
        (token) =>
          `export declare const ${token.name}: ${
            typeof token.value === 'number' ? token.value : `'${token.value}'`
          };`,
      )
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map((category) => {
        const categoryTokens = formatTokens(dictionary.tokens[category]);

        return `export declare const ${category}: ${JSON.stringify(categoryTokens, null, 2)}; \n`;
      })
      .join('\n');

    return [tokens, groups].join('\n');
  },
};
