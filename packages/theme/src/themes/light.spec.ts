import { lightTheme } from './light';
import { colorPrimaryDefault } from '@project44-manifest/design-tokens';

describe('@project-manifest/theme - lightTheme', () => {
	it('should return a theme object', () => {
		expect(lightTheme).toBeInstanceOf(Object);
	});

	it('should return theme specific colors', () => {
		expect(lightTheme.colors['primary-default']).toBe(colorPrimaryDefault);
	});
});
