import * as React from 'react';
import { mergeRefs } from '../../src';

describe('@manifest/react - mergeRefs', () => {
  it('should merge refs', () => {
    const input = React.createElement('input', { type: 'text' });
    const ref = React.createRef();
    const callbackRef = jest.fn();

    mergeRefs(ref, callbackRef)(input);

    expect(ref.current).toBe(input);
    expect(callbackRef).toHaveBeenCalledWith(input);
  });

  it('should ignore invalid refs', () => {
    const input = React.createElement('input', { type: 'text' });
    const ref = null;
    const refObject = {};

    mergeRefs(ref, refObject as React.RefObject<any>)(input);
  });
});
