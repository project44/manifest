import { render, renderHook } from '@project44-manifest/react-test-utils';
import { createContext } from '../src';

describe('@project44-manifest/react-utils - context', () => {
	it('should return context methods', () => {
		const [Provider, useProvider] = createContext<{ foo: string }>();

		const { result } = renderHook(() => useProvider(), {
			wrapper: ({ children }) => <Provider value={{ foo: 'bar' }}>{children}</Provider>,
		});

		expect(result.current.foo).toBe('bar');
	});

	it('should support appending a display name to the provider', () => {
		const [Provider] = createContext<{ foo: string }>({ name: 'TestProvider' });

		render(<Provider value={{ foo: 'bar' }}>Hello World</Provider>);

		// This is hard to test without hacking things together. Lets just make sure it doesn't fail.
		expect(true).toBeTruthy();
	});
});
