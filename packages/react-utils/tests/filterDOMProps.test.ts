import { filterDOMProps } from '../src';

describe('@project44-manifest/react-utils - filterDOMProps', () => {
	it('should filter non-native props', () => {
		const props = filterDOMProps({ className: 'test', foo: true });

		expect(props.className).toBe('test');
		expect(props.foo).toBeUndefined();
	});

	it('should support aria attributes', () => {
		const props = filterDOMProps({ className: 'test', 'aria-label': 'test' });

		expect(props.className).toBe('test');
		expect(props['aria-label']).toBe('test');
	});

	it('should support data attributes', () => {
		const props = filterDOMProps({ className: 'test', 'data-testId': 'test' });

		expect(props.className).toBe('test');
		expect(props['data-testId']).toBe('test');
	});

	it('should support allowed props', () => {
		const props = filterDOMProps({ className: 'test', testProp: 'test' }, new Set(['testProp']));

		expect(props.className).toBe('test');
		expect(props.testProp).toBe('test');
	});
});
