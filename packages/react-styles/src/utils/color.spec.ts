import type * as Stitches from '@stitches/react';
import { color } from './color';

describe('@project44-manifest/react - color', () => {
	it('should support backgroundColor alias', () => {
		const mixin = color.bgColor('black' as unknown as Stitches.PropertyValue<'backgroundColor'>);

		expect(mixin).toHaveProperty('backgroundColor');
	});
});
