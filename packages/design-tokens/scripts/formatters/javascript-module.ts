import { Format } from 'style-dictionary';
import { formatTokens } from '../utils';

export const javascriptModule: Format = {
  name: 'javascript/module',
  formatter: ({ dictionary }) => {
    const tokens = dictionary.allTokens
      .map((token) => `export const ${token.name} = ${JSON.stringify(token.value)};`)
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map((category) => {
        const categoryTokens = formatTokens(dictionary.tokens[category]);

        return `export const ${category} = ${JSON.stringify(categoryTokens, null, 2)}; \n`;
      })
      .join('\n');

    return [tokens, groups].join('\n');
  },
};
