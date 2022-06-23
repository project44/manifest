import type { Named, Format } from 'style-dictionary';
import { format } from 'prettier';
import { formatHelpers } from 'style-dictionary';

export const typescriptFormatter: Named<Format> = {
  name: 'manifest/typescript',
  formatter: ({ file }) =>
    format(
      [
        formatHelpers.fileHeader({ file }),
        'export * from "./tokens"',
        'export * from "./theme"',
      ].join('\n'),
      {
        parser: 'typescript',
        printWidth: 100,
        singleQuote: true,
      },
    ),
};
