import startCase from 'lodash/startCase';
import upperFirst from 'lodash/upperFirst';

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const getColorName = (token: string, category: string) => {
  const formattedCategory = upperFirst(category);
  const re = new RegExp(['color', formattedCategory].join('|'), 'gi');

  return startCase(token.replace(re, ''));
};

export const getCategoryColors = (tokens: string[], tokenCategory: string) =>
  Object.keys(tokens)
    .filter(token => {
      if (token.includes(tokenCategory)) {
        return token;
      }

      return null;
    })
    .sort(collator.compare);
