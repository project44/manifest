import { makeCSSObject } from '../../src';

describe('@project44-manifest/react-styles - makeCSSObject', () => {
	it('should return a set of selectors', () => {
		const selectors = makeCSSObject({ root: { padding: '4px' }, child: {}, override: {} });

		expect(selectors).toStrictEqual({ padding: '4px', '& .child': {}, '& .override': {} });
	});

	it('should ignore builtins', () => {
		const selectors = makeCSSObject({ root: {}, child: {}, override: {} });

		expect(selectors).toStrictEqual({ '& .child': {}, '& .override': {} });
	});
});
