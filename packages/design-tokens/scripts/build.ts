import path from 'path';
import StyleDictionary from 'style-dictionary';

const CATEGORIES = new Set(['border-width', 'font-size', 'line-height', 'radius', 'size', 'space']);
const ROOT_DIR = path.resolve(__dirname, '../');

StyleDictionary.registerTransform({
  name: 'size/pxToRem',
  type: 'value',
  matcher: token => CATEGORIES.has(token.attributes?.category as string),
  transformer: token => {
    const tokenValue = token.original.value as string;

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
  name: 'css',
  transforms: ['attribute/cti', 'name/cti/kebab', 'size/pxToRem', 'color/rgb'],
});

StyleDictionary.registerTransformGroup({
  name: 'javascript',
  transforms: ['attribute/cti', 'name/cti/camel', 'size/pxToRem', 'color/rgb'],
});

StyleDictionary.extend({
  source: [path.join(ROOT_DIR, 'tokens/**/*.json')],
  platforms: {
    css: {
      buildPath: path.join(ROOT_DIR, 'lib/'),
      files: [{ destination: 'css/styles.css', format: 'css/variables' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'css',
    },
    javascript: {
      buildPath: path.join(ROOT_DIR, 'src/'),
      files: [{ destination: 'index.ts', format: 'javascript/es6' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'javascript',
    },
    json: {
      buildPath: path.join(ROOT_DIR, 'lib/'),
      files: [{ destination: 'json/tokens.json', format: 'json/flat' }],
      options: {
        showFileHeader: false,
      },
      transformGroup: 'css',
    },
  },
}).buildAllPlatforms();
