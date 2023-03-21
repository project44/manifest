import prettier from 'prettier';
import { Format, formatHelpers } from 'style-dictionary';
import type { TransformedTokens } from 'style-dictionary/types/TransformedToken';

const formatTokens = (token: TransformedTokens) => {
  if ('value' in token) return token.value;

  if (typeof token !== 'object') return token;

  const result: Record<string, unknown> = {};

  for (const [prop, value] of Object.entries(token)) {
    result[prop] = formatTokens(value);
  }

  return result;
};

export const groupsFormatter: Format = {
  name: 'typescript/groups',
  formatter: ({ dictionary, file }) => {
    const categories: string[] = [];

    for (const category in dictionary.tokens) {
      if (category) {
        categories.push(category);
      }
    }

    const groups = categories
      .map((category) => {
        const tokens = formatTokens(dictionary.tokens[category]);

        return `export const ${category} = ${JSON.stringify(tokens, null, 2)}; \n`;
      })
      .join('\n');

    return prettier.format([formatHelpers.fileHeader({ file }), groups].join('\n'), {
      parser: 'typescript',
      endOfLine: 'lf',
      printWidth: 100,
      semi: true,
      singleQuote: true,
    });
  },
};
