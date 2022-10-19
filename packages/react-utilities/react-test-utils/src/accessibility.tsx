import * as React from 'react';
import { axe, JestAxeConfigureOptions, toHaveNoViolations } from 'jest-axe';
import type { RenderOptions } from '@testing-library/react';
import { render } from './render';

export function accessibility(
	ui: React.ReactElement,
	options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {},
) {
	expect.extend(toHaveNoViolations);

	it('should have no accessibility violations', async () => {
		const { axeOptions, ...other } = options;
		const { container } = render(ui, other);

		const result = await axe(container, axeOptions);

		expect(result).toHaveNoViolations();
	});
}
