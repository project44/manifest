import { typography, VariantToken } from './typography';

describe('@project44-manifest/react - typography', () => {
	it('should support typography alias', () => {
		const mixin = typography.typography('$display' as VariantToken);

		expect(mixin).toHaveProperty('fontFamily');
		expect(mixin).toHaveProperty('fontSize');
		expect(mixin).toHaveProperty('fontWeight');
		expect(mixin).toHaveProperty('letterSpacing');
		expect(mixin).toHaveProperty('lineHeight');
	});
});
