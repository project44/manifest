import camelCase from 'lodash.camelcase';

export const tokensTemplate = (categories: string[]) => `
  const tokens = { ${categories.map((category) => `${camelCase(category)},`).join('\n')} };
`;
