import { themeFormatter, tokenFormatter, typescriptFormatter } from './formatters';
import path from 'path';
import { pxToRemTransformer } from './transformers/pxToRem';
import StyleDictionary from 'style-dictionary';

const ROOT_DIR = path.resolve(__dirname, '../');
const OUT_PUT_DIR = path.join(ROOT_DIR, 'src/');

StyleDictionary.registerTransformGroup({
  name: 'manifest/typescript',
  transforms: ['attribute/cti', 'name/cti/constant', 'size/pxToRem', 'color/css'],
});

StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'color/css'],
});

StyleDictionary.registerFormat(themeFormatter);
StyleDictionary.registerFormat(tokenFormatter);
StyleDictionary.registerFormat(typescriptFormatter);

StyleDictionary.registerTransform(pxToRemTransformer);

StyleDictionary.extend({
  source: [path.join(ROOT_DIR, 'tokens/**/*.json')],
  platforms: {
    theme: {
      buildPath: OUT_PUT_DIR,
      files: [{ destination: 'theme.ts', format: 'manifest/theme' }],
      transformGroup: 'manifest/typescript',
    },
    tokens: {
      buildPath: OUT_PUT_DIR,
      files: [{ destination: 'tokens.ts', format: 'manifest/tokens' }],
      transformGroup: 'manifest/typescript',
    },
    typescript: {
      buildPath: OUT_PUT_DIR,
      files: [{ destination: 'index.ts', format: 'manifest/typescript' }],
      transformGroup: 'manifest/typescript',
    },
  },
}).buildAllPlatforms();
