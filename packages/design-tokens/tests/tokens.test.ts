import { colorPaletteBlue50, tokens } from '../src';

describe('@project44-manifest/design-tokens - tokens', () => {
	it('should return a token constant', () => {
		expect(colorPaletteBlue50).toBe('#ecf4fe');
	});

	it('should return a token object', () => {
		expect(typeof tokens === 'object').toBeTruthy();
		expect(tokens.color.palette.blue[50]).toBe('#ecf4fe');
	});
});
