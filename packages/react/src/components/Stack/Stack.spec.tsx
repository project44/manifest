import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('@project44-manifest/react - Stack', () => {
	it('should render', () => {
		const box = 'box-content';

		render(
			<Stack>
				<p data-testid={box}>Box</p>
			</Stack>,
		);

		expect(screen.getByTestId(box)).toHaveTextContent('Box');
		expect(screen.getByTestId(box)).toContainHTML('<p data-testid="box-content">Box</p>');
	});
});
