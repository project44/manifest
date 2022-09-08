const path = require('path');
const StyleDictionary = require('style-dictionary');

const CATEGORIES = new Set(['border-width', 'font-size', 'line-height', 'radius', 'size', 'space']);
const ROOT_DIR = path.resolve(__dirname, '../');

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: token => CATEGORIES.has(token.attributes.category),
  transformer: token => {
    const tokenValue = token.original.value;

    if (tokenValue.includes('%') || tokenValue.includes('px') || tokenValue.includes('em')) {
      return tokenValue;
    }

    const baseFont = 16;
    const parsedValue = parseFloat(tokenValue);

    if (parsedValue === 0) return '0';

    return `${parsedValue / baseFont}rem`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'javascript',
  transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToRem', 'color/hex'],
});

StyleDictionary.extend({
  source: [path.join(ROOT_DIR, 'tokens/**/*.json')],
  platforms: {
    cjs: {
      buildPath: path.join(ROOT_DIR, 'lib/'),
      files: [{ destination: 'index.js', format: 'javascript/module-flat' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'javascript',
    },
    esm: {
      buildPath: path.join(ROOT_DIR, 'esm/'),
      files: [{ destination: 'index.js', format: 'javascript/es6' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'javascript',
    },
    ts: {
      buildPath: path.join(ROOT_DIR, 'dts/'),
      files: [{ destination: 'index.d.ts', format: 'typescript/es6-declarations' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'javascript',
    },
  },
}).buildAllPlatforms();
