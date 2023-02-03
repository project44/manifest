import type { TransformedToken } from 'style-dictionary';

export const getTokenCategories = (tokens: TransformedToken[]) => {
  const categories = new Set<string>();

  for (const token of tokens) {
    const { attributes } = token;

    if (attributes?.category) {
      categories.add(attributes?.category);
    }
  }

  return categories;
};
