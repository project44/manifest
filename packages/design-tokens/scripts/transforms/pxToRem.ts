import type { Named, Transform } from 'style-dictionary';

export const pxToRemTranformer: Named<Transform> = {
  name: 'size/pxToRem',
  type: 'value',
  transformer: (token) => {
    if (typeof token.original.value !== 'string' || !token.original.value.endsWith('px')) {
      return token.original.value;
    }

    const rawValue = token.original.value.replace('px', '');
    const baseFont = 16;
    const parsedValue = parseFloat(rawValue);

    if (parsedValue === 0) return '0';

    return `${parsedValue / baseFont}rem`;
  },
};
