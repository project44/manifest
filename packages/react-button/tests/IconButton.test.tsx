import { accessibility, render, screen } from '@project44-manifest/react-test-utils';
import { IconButton } from '../src';

describe('react-button - IconButton', () => {
	accessibility(<IconButton>icon</IconButton>);

	it('should render', () => {
		render(<IconButton>icon</IconButton>);

		const button = screen.getByRole('button');

		expect(button).toBeVisible();
		expect(button).toHaveAttribute('type', 'button');
	});
});
