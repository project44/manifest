import type { Named, Format } from 'style-dictionary';
import { format } from 'prettier';
import { formatHelpers } from 'style-dictionary';

export const tokenFormatter: Named<Format> = {
  name: 'manifest/tokens',
  formatter: ({ dictionary, file }) => {
    const { allTokens } = dictionary;

    const tokens = allTokens
      .map(token => `export const ${token.name} = '${token.value}';`)
      .join('\n');

    return format([formatHelpers.fileHeader({ file }), tokens].join('\n'), {
      parser: 'typescript',
      printWidth: 100,
      singleQuote: true,
    });
  },
};
