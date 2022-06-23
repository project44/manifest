import { Named, Transform } from 'style-dictionary';

const categories = new Set(['font-size', 'line-height', 'size', 'space']);

export const pxToRemTransformer: Named<Transform> = {
  name: 'size/pxToRem',
  type: 'value',
  matcher: token => categories.has(token.attributes?.category as string),
  transformer: token => {
    const tokenValue = token.original.value as string;

    const baseFont = 16;
    const parsedValue = parseFloat(tokenValue);

    if (parsedValue === 0) return '0';

    return `${parsedValue / baseFont}rem`;
  },
};
