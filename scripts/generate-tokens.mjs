import prettier from 'prettier';
import StyleDictionary from 'style-dictionary';
import { themeTemplate } from './templates/theme.mjs';
import { tokensTemplate } from './templates/tokens.mjs';

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

generateTokens();
