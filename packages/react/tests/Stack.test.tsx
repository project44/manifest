import { render, screen } from '@project44-manifest/test-utils';
import { Stack } from '../src';

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
