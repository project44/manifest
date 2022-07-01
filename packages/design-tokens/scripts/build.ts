import { tokenFormatter } from './formatters';
import path from 'path';
import { pxToRemTransformer } from './transformers/pxToRem';
import StyleDictionary from 'style-dictionary';

const ROOT_DIR = path.resolve(__dirname, '../');
const OUT_PUT_DIR = path.join(ROOT_DIR, 'src/');

StyleDictionary.registerFormat(tokenFormatter);
StyleDictionary.registerTransform(pxToRemTransformer);

StyleDictionary.extend({
  source: [path.join(ROOT_DIR, 'tokens/**/*.json')],
  platforms: {
    json: {
      buildPath: OUT_PUT_DIR,
      files: [{ destination: 'tokens.json', format: 'json/flat' }],
      transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'color/rgb'],
    },
    tokens: {
      buildPath: OUT_PUT_DIR,
      files: [{ destination: 'index.ts', format: 'manifest/tokens' }],
      transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToRem', 'color/rgb'],
    },
  },
}).buildAllPlatforms();
