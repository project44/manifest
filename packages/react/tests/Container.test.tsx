import { render, screen } from '@testing-library/react';
import { Container } from '../src';

describe('@project44-manifest/react - Container', () => {
	it('should render', () => {
		const box = 'box-content';

		render(
			<Container>
				<p data-testid={box}>Box</p>
			</Container>,
		);

		expect(screen.getByTestId(box)).toHaveTextContent('Box');
		expect(screen.getByTestId(box)).toContainHTML('<p data-testid="box-content">Box</p>');
	});
});
