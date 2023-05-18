import StyleDictionary from 'style-dictionary';
import { javascriptCommon, javascriptModule, typescriptDeclarations } from './formatters';
import { pxToRemTranformer } from './transforms';

StyleDictionary.registerFormat(javascriptCommon);
StyleDictionary.registerFormat(javascriptModule);
StyleDictionary.registerFormat(typescriptDeclarations);

// Convert pixel values to rem.
StyleDictionary.registerTransform(pxToRemTranformer);

StyleDictionary.extend({
  source: ['src/**/*.json'],
  platforms: {
    js: {
      transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToRem', 'color/hex'],
      files: [
        {
          destination: 'lib/index.js',
          format: 'javascript/common',
        },
        {
          destination: 'esm/index.js',
          format: 'javascript/module',
        },
        {
          destination: 'dts/index.d.ts',
          format: 'typescript/declarations',
        },
      ],
    },
  },
}).buildAllPlatforms();
