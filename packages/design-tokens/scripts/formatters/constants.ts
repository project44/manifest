import prettier from 'prettier';
import { Format, formatHelpers } from 'style-dictionary';

export const constantsFormatter: Format = {
  name: 'typescript/constants',
  formatter: ({ dictionary, file }) => {
    const tokens = dictionary.allTokens
      .map((token) => `export const ${token.name} = ${JSON.stringify(token.value)};`)
      .join('\n');

    return prettier.format([formatHelpers.fileHeader({ file }), tokens].join('\n'), {
      parser: 'typescript',
      endOfLine: 'lf',
      printWidth: 100,
      semi: true,
      singleQuote: true,
    });
  },
};
