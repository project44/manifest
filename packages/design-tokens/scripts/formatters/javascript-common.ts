import { Format } from 'style-dictionary';
import { formatTokens } from '../utils';

export const javascriptCommon: Format = {
  name: 'javascript/common',
  formatter: ({ dictionary }) => {
    const tokens = dictionary.allTokens
      .map((token) => `exports.${token.name} = ${token.value};`)
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map((category) => {
        const categoryTokens = formatTokens(dictionary.tokens[category]);

        return `exports.${category} = ${JSON.stringify(categoryTokens, null, 2)};`;
      })
      .join('\n');

    return [
      "'use strict';",
      'Object.defineProperty(exports, "__esModule", { value: true });',
      tokens,
      groups,
    ].join('\n');
  },
};
