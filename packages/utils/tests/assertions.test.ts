import { isObject } from '../src';

describe('@project44-manifest/utils - assertions', () => {
	describe('isObject', () => {
		it('should return truthy if an object', () => {
			const obj = { foo: true };

			expect(isObject(obj)).toBeTruthy();
		});

		it('should return falsy if not an object', () => {
			expect(isObject('object')).toBeFalsy();
		});

		it('should return falsy if null', () => {
			expect(isObject(null)).toBeFalsy();
		});
	});
});
