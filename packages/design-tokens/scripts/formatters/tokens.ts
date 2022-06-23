import type { Named, Format } from 'style-dictionary';
import { format } from 'prettier';

export const tokenFormatter: Named<Format> = {
  name: 'manifest/tokens',
  formatter: ({ dictionary }) => {
    const { allTokens } = dictionary;

    const tokens = allTokens
      .map(token => `export const ${token.name} = '${token.value}';`)
      .join('\n');

    return format(tokens, {
      parser: 'typescript',
      printWidth: 100,
      singleQuote: true,
    });
  },
};
