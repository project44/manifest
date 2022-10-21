import { accessibility, render, screen } from '@project44-manifest/test-utils';
import { IconButton } from '../src';

describe('@project44-manifest/react - Button', () => {
	accessibility(<IconButton>icon</IconButton>);

	it('should render', () => {
		render(<IconButton>icon</IconButton>);

		const button = screen.getByRole('button');

		expect(button).toBeVisible();
		expect(button).toHaveAttribute('type', 'button');
	});

	it.each`
		size        | className
		${'medium'} | ${'manifest-button-medium'}
		${'small'}  | ${'manifest-button-small'}
	`('should attach the $className className for the $size size', ({ className, size }) => {
		render(<IconButton size={size}>icon</IconButton>);

		const button = screen.getByRole('button');

		expect(button.classList).toContain(className);
	});
});
