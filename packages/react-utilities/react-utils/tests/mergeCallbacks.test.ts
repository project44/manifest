import { Callback, mergeCallbacks } from '../src';

describe('@project44-manifest/react-utils - mergeCallbacks', () => {
	it('should merge functions', () => {
		const func1 = jest.fn();
		const func2 = jest.fn();

		const cb = mergeCallbacks(func1, func2);

		cb?.();

		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);
	});

	it('should handle non-functions', () => {
		const func1 = jest.fn();
		const func2 = jest.fn();
		const func3 = 'test';

		const cb = mergeCallbacks(func1, func2, func3 as unknown as Callback<any>);

		cb?.();

		expect(func1).toHaveBeenCalledTimes(1);
		expect(func2).toHaveBeenCalledTimes(1);
	});
});
