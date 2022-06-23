import type { Named, Format, TransformedToken } from 'style-dictionary';
import camelCase from 'lodash/camelCase';
import { format } from 'prettier';
import kebabCase from 'lodash/kebabCase';

const themeTemplate = (tokens: TransformedToken[]) => {
  const categories = [
    ...new Set(tokens.map(token => token?.attributes && token.attributes.category).filter(Boolean)),
  ].sort() as string[];

  const categoriesTemplate = categories
    .map(category => {
      const categoryTokens = tokens.filter(prop => prop?.attributes?.category === category);

      return `${camelCase(category)}: { ${categoryTokens
        .map(token => {
          const transformedTokenName = kebabCase(token.name);
          const tokenName = transformedTokenName.replace(`${kebabCase(category)}-`, '');

          return `'${tokenName}': tokens.${token.name},`;
        })
        .join('\n')} },`;
    })
    .join('\n');

  return [
    `export type Theme = typeof theme;\n`,
    `export const theme = { ${categoriesTemplate} };\n`,
  ].join('\n');
};

export const themeFormatter: Named<Format> = {
  name: 'manifest/theme',
  formatter: ({ dictionary }) => {
    const { allTokens } = dictionary;

    const categories = themeTemplate(allTokens);

    return format(['import * as tokens from "./tokens"\n', ` ${categories}\n`].join('\n'), {
      parser: 'typescript',
      printWidth: 100,
      singleQuote: true,
    });
  },
};
