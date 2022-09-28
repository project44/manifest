import type * as Stitches from '@stitches/react';
import { layout } from './layout';

describe('@project44-manifest/react - layout', () => {
	it('should support display alias', () => {
		const mixin = layout.d('block' as unknown as Stitches.PropertyValue<'display'>);

		expect(mixin).toHaveProperty('display');
	});

	it('should support height alias', () => {
		const mixin = layout.h('100%' as unknown as Stitches.PropertyValue<'height'>);

		expect(mixin).toHaveProperty('height');
	});

	it('should support max height alias', () => {
		const mixin = layout.maxH('100%' as unknown as Stitches.PropertyValue<'maxHeight'>);

		expect(mixin).toHaveProperty('maxHeight');
	});

	it('should support max width alias', () => {
		const mixin = layout.maxW('100%' as unknown as Stitches.PropertyValue<'maxWidth'>);

		expect(mixin).toHaveProperty('maxWidth');
	});

	it('should support min height alias', () => {
		const mixin = layout.minH('100%' as unknown as Stitches.PropertyValue<'minHeight'>);

		expect(mixin).toHaveProperty('minHeight');
	});

	it('should support min width alias', () => {
		const mixin = layout.minW('100%' as unknown as Stitches.PropertyValue<'minWidth'>);

		expect(mixin).toHaveProperty('minWidth');
	});

	it('should support size alias', () => {
		const mixin = layout.size('100%' as unknown as Stitches.PropertyValue<'width'>);

		expect(mixin).toHaveProperty('height');
		expect(mixin).toHaveProperty('width');
	});

	it('should support width alias', () => {
		const mixin = layout.w('100%' as unknown as Stitches.PropertyValue<'width'>);

		expect(mixin).toHaveProperty('width');
	});
});
