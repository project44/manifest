import StyleDictionary from 'style-dictionary';
import { hexAlphaTranformer, pxToRemTranformer } from './transforms';

// Add custom converters
StyleDictionary.registerTransform(hexAlphaTranformer);
StyleDictionary.registerTransform(pxToRemTranformer);

StyleDictionary.extend({
  source: ['src/**/*.json'],
  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'size/pxToRem',
        'color/hex',
        'color/hexAlpha',
      ],
      files: [
        {
          destination: 'lib/tokens.css',
          format: 'css/variables',
          options: { showFileHeader: false },
        },
      ],
    },
    js: {
      transforms: [
        'attribute/cti',
        'name/cti/camel',
        'size/pxToRem',
        'color/hex',
        'color/hexAlpha',
      ],
      files: [
        {
          destination: 'lib/index.js',
          format: 'javascript/module-flat',
          options: { showFileHeader: false },
        },
        {
          destination: 'esm/index.js',
          format: 'javascript/es6',
          options: { showFileHeader: false },
        },
        {
          destination: 'dts/index.d.ts',
          format: 'typescript/es6-declarations',
          options: { showFileHeader: false },
        },
      ],
    },
  },
}).buildAllPlatforms();
