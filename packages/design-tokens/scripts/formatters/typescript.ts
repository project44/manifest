import type { Named, Format } from 'style-dictionary';
import { format } from 'prettier';

export const typescriptFormatter: Named<Format> = {
  name: 'manifest/typescript',
  formatter: () =>
    format(['export * from "./tokens"', 'export * from "./theme"'].join('\n'), {
      parser: 'typescript',
      printWidth: 100,
      singleQuote: true,
    }),
};
