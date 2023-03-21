import prettier from 'prettier';
import { Format, formatHelpers } from 'style-dictionary';

export const tokensFormatter: Format = {
  name: 'typescript/tokens',
  formatter: ({ dictionary, file }) => {
    const result = dictionary.allProperties.map(({ filePath, isSource, original, ...rest }) => ({
      ...rest,
    }));

    return prettier.format(
      [
        formatHelpers.fileHeader({ file }),
        `export const tokens = ${JSON.stringify(result, null, 2)};`,
      ].join('\n'),
      {
        parser: 'typescript',
        endOfLine: 'lf',
        printWidth: 100,
        semi: true,
        singleQuote: true,
      },
    );
  },
};
