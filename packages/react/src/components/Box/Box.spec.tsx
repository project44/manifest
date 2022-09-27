import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Box } from './Box';

describe('@project44-manifest/react - Box', () => {
	it('should render', () => {
		const box = 'box-content';

		render(
			<Box>
				<p data-testid={box}>Box</p>
			</Box>,
		);

		expect(screen.getByTestId(box)).toHaveTextContent('Box');
		expect(screen.getByTestId(box)).toContainHTML('<p data-testid="box-content">Box</p>');
	});
});
