import { mergeClasses } from '../../src';

describe('@project44-manifest/react-styles - mergeClasses', () => {
	it('should return a set of merged class names', () => {
		const classNames = mergeClasses(
			{ root: 'root', child: 'child' },
			{ root: 'root-test', child: 'child-test' },
		);

		expect(classNames).toStrictEqual({
			root: 'root root-test',
			child: 'child child-test',
		});
	});

	it('should return a set of partially merged class names', () => {
		const classNames = mergeClasses({ root: 'root', child: 'child' }, { root: 'root-test' });

		expect(classNames).toStrictEqual({
			root: 'root root-test',
			child: 'child',
		});
	});
});
