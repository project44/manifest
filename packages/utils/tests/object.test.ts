import { flattenDeep } from '../src';

describe('@project44-manifest/utils - object', () => {
	describe('flattenDeep', () => {
		it('should return a flattened object', () => {
			const obj = { foo: 'bar', baz: { foo: 'bar', bar: { baz: 'foo', bar: 1, foo: true } } };

			expect(flattenDeep(obj)).toEqual(
				expect.objectContaining({
					'baz-bar-baz': 'foo',
					'baz-bar-bar': 1,
					'baz-bar-foo': true,
					'baz-foo': 'bar',
					foo: 'bar',
				}),
			);
		});

		it('should ignore arrays', () => {
			const obj = { foo: 'bar', baz: { foo: [1, 1] } };
			const flattenedObject = flattenDeep(obj);

			expect(flattenedObject).toEqual(expect.objectContaining({ foo: 'bar' }));
			expect(flattenedObject.baz).toBeUndefined();
		});
	});
});
