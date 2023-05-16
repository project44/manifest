import chroma from 'chroma-js';
import type { Named, Transform } from 'style-dictionary';

export const hexAlphaTranformer: Named<Transform> = {
  name: 'color/hexAlpha',
  type: 'value',
  transitive: true,
  matcher: (token) => token.attributes?.category === 'color' && token.alpha !== undefined,
  transformer: (token) => {
    const color = chroma(token.value as string).alpha(token.alpha as number);

    return color.hex();
  },
};
