import prettier from 'prettier';
import type { Formatter } from 'style-dictionary/types/Format';
import { categoryTemplate, tokenNameTemplate, tokensTemplate, tokenTemplate } from '../templates';
import { getTokenCategories } from '../utils';

export const esmFormatter: Formatter = (args) => {
  const { dictionary } = args;
  const { allTokens } = dictionary;

  const categories = getTokenCategories(allTokens);

  const groups = categoryTemplate(Array.from(categories), allTokens);
  const token = tokenTemplate(allTokens);
  const tokenNames = tokenNameTemplate(allTokens);
  const tokens = tokensTemplate(Array.from(categories));

  const output = `${token}

  ${groups};

  ${tokens};

  export {
    tokens,
    ${tokenNames}
  };
  `;

  return prettier.format(output, { parser: 'babel' });
};
