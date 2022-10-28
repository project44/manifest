import { render, screen } from '@project44-manifest/react-test-utils';
import { Grid } from '../src';

describe('react-layout - Grid', () => {
	it('should render correctly', () => {
		render(<Grid>Hello World</Grid>);

		const container = screen.getByText('Hello World');

		expect(container).toBeVisible();
	});
});
