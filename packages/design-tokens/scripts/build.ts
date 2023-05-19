import prettier, { RequiredOptions } from 'prettier';
import StyleDictionary, { formatHelpers, TransformedTokens } from 'style-dictionary';

const prettierOptions: Partial<RequiredOptions> = {
  parser: 'typescript',
  endOfLine: 'lf',
  printWidth: 100,
  semi: true,
  singleQuote: true,
};

StyleDictionary.registerFormat({
  name: 'javascript/common',
  formatter: ({ dictionary }) => {
    const singleTokens = dictionary.allTokens
      .map((token) => `${token.name}: ${JSON.stringify(token.value)},`)
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map(
        (category) =>
          `${category}: ${JSON.stringify(
            formatHelpers.minifyDictionary(dictionary.tokens[category]),
            null,
            2,
          )},`,
      )
      .join('\n');

    const tokens = `tokens: ${JSON.stringify(
      formatHelpers.minifyDictionary(dictionary.tokens),
      null,
      2,
    )},`;

    return prettier.format(
      ['module.exports = {', singleTokens, groups, tokens, '};'].join('\n'),
      prettierOptions,
    );
  },
});

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  formatter: ({ dictionary }) => {
    const singleTokens = dictionary.allTokens
      .map((token) => `export const ${token.name} = ${JSON.stringify(token.value)};`)
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map(
        (category) =>
          `export const ${category} = ${JSON.stringify(
            formatHelpers.minifyDictionary(dictionary.tokens[category]),
            null,
            2,
          )}; \n`,
      )
      .join('\n');

    const tokens = `export const tokens = ${JSON.stringify(
      formatHelpers.minifyDictionary(dictionary.tokens),
      null,
      2,
    )},`;

    return prettier.format([singleTokens, groups, tokens].join('\n'), prettierOptions);
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/declarations',
  formatter: ({ dictionary }) => {
    const singleTokens = dictionary.allTokens
      .map(
        (token) =>
          `export declare const ${token.name}: ${
            typeof token.value === 'number' ? token.value : `'${token.value}'`
          };`,
      )
      .join('\n');

    const groups = Object.keys(dictionary.tokens)
      .map((category) => {
        const categoryTokens = formatHelpers.minifyDictionary(
          dictionary.tokens[category],
        ) as TransformedTokens;

        return `export declare const ${category}: { ${Object.keys(categoryTokens)
          .map((token) => `'${token}': ${formatHelpers.getTypeScriptType(categoryTokens[token])};`)
          .join('\n')}};`;
      })
      .join('\n');

    const tokens = `
    export interface Token {
      value: any;
      name: string;
      comment?: string;
      attributes: {
        category: string;
        type: string;
        item?: string;
        subitem?: string;
        state?: string;
        [key: string]: any;
      };
      [key: string]: any;
    }

    export declare const tokens: Token[];
    `;

    return prettier.format([singleTokens, groups, tokens].join('\n'), prettierOptions);
  },
});

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  transformer: (token) => {
    if (typeof token.original.value !== 'string' || !token.original.value.endsWith('px')) {
      return token.original.value;
    }

    const rawValue = token.original.value.replace('px', '');
    const baseFont = 16;
    const parsedValue = parseFloat(rawValue);

    if (parsedValue === 0) return '0';

    return `${parsedValue / baseFont}rem`;
  },
});

StyleDictionary.extend({
  source: ['src/**/*.json'],
  platforms: {
    js: {
      transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToRem', 'color/hex'],
      files: [
        {
          destination: 'lib/index.js',
          format: 'javascript/common',
        },
        {
          destination: 'esm/index.js',
          format: 'javascript/esm',
        },
        {
          destination: 'dts/index.d.ts',
          format: 'typescript/declarations',
        },
      ],
    },
  },
}).buildAllPlatforms();
