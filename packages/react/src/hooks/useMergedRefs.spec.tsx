import * as React from 'react';
import { render } from '@testing-library/react';
import { useMergedRefs } from './useMergedRefs';

function TestComponent({
  testRef: forwardedRef,
}: {
  testRef: React.ForwardedRef<HTMLButtonElement>;
}) {
  const ref = React.useRef<HTMLButtonElement>(null);

  return <button ref={useMergedRefs(ref, forwardedRef)} type="button" />;
}

describe('@manifest/react - useMergedRef', () => {
  it('should be defined', () => {
    expect(useMergedRefs).toBeDefined();
  });

  it('should merge refs', () => {
    const testRef = React.createRef<HTMLButtonElement>();

    render(<TestComponent testRef={testRef} />);

    expect(testRef.current instanceof HTMLButtonElement).toBe(true);
  });
});
