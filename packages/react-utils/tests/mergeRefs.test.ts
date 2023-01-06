import * as React from 'react';
import { mergeRefs as mergeReferences } from '../src';

describe('@project44-manifest/react-utils - mergeRefs', () => {
  it('should merge refs', () => {
    const input = React.createElement('input', { type: 'text' });
    const reference = React.createRef();
    const callbackReference = jest.fn();

    mergeReferences(reference, callbackReference)(input);

    expect(reference.current).toBe(input);
    expect(callbackReference).toHaveBeenCalledWith(input);
  });

  it('should ignore invalid refs', () => {
    const input = React.createElement('input', { type: 'text' });
    const reference = null;
    const referenceObject = {};

    mergeReferences(reference, referenceObject as React.RefObject<any>)(input);

    // Just checking for an error
    expect(true).toBeTruthy();
  });
});
