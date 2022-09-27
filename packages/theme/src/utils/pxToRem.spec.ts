import { pxToRem } from './pxToRem';

describe('@project-manifest/theme - pxToRem', () => {
	it('convert px value to rem', () => {
		expect(pxToRem(24)).toBe('1.5rem');
	});
});
