import { makeCSSObject } from '../../src';

describe('@project44-manifest/react-styles - makeCSSObject', () => {
	it('should return a set of selectors', () => {
		const selectors = makeCSSObject({ root: { padding: '4px' }, child: {}, override: {} }, 'test');

		expect(selectors).toStrictEqual({
			padding: '4px',
			'& .manifest-test-child': {},
			'& .manifest-test-override': {},
		});
	});
});
