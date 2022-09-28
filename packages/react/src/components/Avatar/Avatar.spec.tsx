import { screen, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Avatar } from './Avatar';

describe('@project44-manifest/react - Avatar', () => {
	it('should have no accessibility violations', async () => {
		const { container } = render(<Avatar />);

		expect(await axe(container)).toHaveNoViolations();
	});

	it('should render an image if a source is provided', () => {
		render(<Avatar src="http://localhost/some_image.png" />);

		fireEvent.load(screen.getByRole('img'));

		expect(screen.getByRole('img')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', 'http://localhost/some_image.png');
	});

	it('should render a fallback if no source is provided', () => {
		render(<Avatar fallback="MD" />);

		expect(screen.queryByRole('img')).toBeNull();
		expect(screen.getByText('MD')).toBeInTheDocument();
	});

	it('should render a fallback if source returns an error', () => {
		render(<Avatar fallback="MD" src="http://localhost/some_image.png" />);

		fireEvent.error(screen.getByRole('img'));

		expect(screen.queryByRole('img')).toBeNull();
		expect(screen.getByText('MD')).toBeInTheDocument();
	});
});
