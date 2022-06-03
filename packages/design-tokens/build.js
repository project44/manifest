const prettier = require('prettier');
const kebabCase = require('lodash/kebabCase.js');
const StyleDictionary = require('style-dictionary');

/**
 * Pluralized keys for generating a system-ui theme specification:
 * https://system-ui.com/theme/
 */
const THEME_KEYS = new Map(
  Object.entries({
    borderWidth: 'borderWidths',
    breakpoint: 'breakpoints',
    color: 'colors',
    fontFamily: 'fonts',
    fontSize: 'fontSizes',
    fontWeight: 'fontWeights',
    letterSpacing: 'letterSpacings',
    lineHeight: 'lineHeights',
    radius: 'radii',
    shadow: 'shadows',
    size: 'sizes',
    space: 'space',
    zIndex: 'zIndices',
  }),
);

const themeTemplate = tokens => {
  const categories = [
    ...new Set(tokens.map(token => token?.attributes && token.attributes.category).filter(Boolean)),
  ].sort();
  const categoriesTemplate = categories
    .map(category => {
      const pluralCategory = THEME_KEYS.get(category);
      const categoryTokens = tokens.filter(prop => prop?.attributes?.category === category);

      return `${pluralCategory}: { ${categoryTokens
        .map(token => {
          const transformedTokenName = kebabCase(token.name);
          const tokenName = transformedTokenName.replace(`${kebabCase(category)}-`, '');

          return `'${tokenName}': ${token.name},`;
        })
        .join('\n')} },`;
    })
    .join('\n');

  return [
    `export type Theme = typeof theme;\n`,
    `export const theme = { ${categoriesTemplate} };\n`,
  ].join('\n');
};

const tokensTemplate = tokens =>
  tokens.map(token => `export const ${token.name} = '${token.value}';`).join('\n');

async function generateTokens() {
  StyleDictionary.registerFormat({
    formatter: ({ dictionary }) => {
      const { allTokens } = dictionary;

      const tokens = tokensTemplate(allTokens);
      const categories = themeTemplate(allTokens);

      return prettier.format([`${tokens}\n`, ` ${categories}\n`].join('\n'), {
        parser: 'typescript',
        printWidth: 100,
        singleQuote: true,
      });
    },
    name: 'typescript',
  });

  StyleDictionary.registerTransformGroup({
    name: 'manifest/js',
    transforms: ['attribute/cti', 'name/cti/constant'],
  });

  StyleDictionary.registerTransformGroup({
    name: 'manifest/js',
    transforms: ['attribute/cti', 'name/cti/constant'],
  });

  const dictionary = StyleDictionary.extend({
    platforms: {
      js: {
        buildPath: 'packages/design-tokens/src/',
        files: [
          {
            destination: 'index.ts',
            format: 'typescript',
          },
        ],
        transformGroup: 'manifest/js',
      },
    },
    source: ['packages/design-tokens/tokens/*.json'],
  });

  await Promise.resolve(true).then(() => dictionary.buildAllPlatforms());
}

generateTokens().catch(error => {
  console.log(error);

  process.exit(1);
});
