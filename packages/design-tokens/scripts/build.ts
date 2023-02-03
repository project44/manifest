import path from 'path';
import StyleDictionary from 'style-dictionary';
import { cjsFormatter, esmFormatter } from './formatters';

const ROOT_DIR = process.cwd();
const TOKEN_DIR = path.join(ROOT_DIR, 'tokens');

StyleDictionary.registerFormat({
  name: 'javascript/cjs',
  formatter: cjsFormatter,
});

StyleDictionary.registerFormat({
  name: 'javascript/esm',
  formatter: esmFormatter,
});

StyleDictionary.registerTransformGroup({
  name: 'javascript',
  transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex'],
});

StyleDictionary.extend({
  source: [path.join(TOKEN_DIR, '**/*.json')],
  platforms: {
    cjs: {
      buildPath: path.join(ROOT_DIR, 'lib/'),
      transformGroup: 'javascript',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/cjs',
        },
      ],
    },
    esm: {
      buildPath: path.join(ROOT_DIR, 'esm/'),
      transformGroup: 'javascript',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/esm',
        },
      ],
    },
  },
}).buildAllPlatforms();
