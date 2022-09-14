const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const getCategoryColors = (tokens: string[], tokenCategory: string) =>
  Object.keys(tokens)
    .filter(token => {
      if (token.includes(tokenCategory)) {
        return token;
      }

      return null;
    })
    .sort(collator.compare);
