import { render, screen } from '@project44-manifest/test-utils';
import { Flex } from '../src';

describe('@project44-manifest/react - Flex', () => {
	it('should render', () => {
		const box = 'box-content';

		render(
			<Flex>
				<p data-testid={box}>Box</p>
			</Flex>,
		);

		expect(screen.getByTestId(box)).toHaveTextContent('Box');
		expect(screen.getByTestId(box)).toContainHTML('<p data-testid="box-content">Box</p>');
	});
});
