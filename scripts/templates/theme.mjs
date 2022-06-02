import kebabCase from 'lodash/kebabCase.js';

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

export const themeTemplate = tokens => {
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
