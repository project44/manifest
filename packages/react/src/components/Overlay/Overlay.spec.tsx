import { render, screen, waitFor } from '@project44-manifest/test-utils';
import { Overlay } from './Overlay';

describe('@project44-manifest/react - Overlay', () => {
	it('should render nothing if isOpen is false', () => {
		render(
			<Overlay>
				<span data-testid="overlay">Overlay</span>
			</Overlay>,
		);

		expect(screen.queryByTestId('overlay')).toBeNull();
	});

	it('should render if isOpen is true', async () => {
		render(
			<Overlay isOpen>
				<span data-testid="overlay">Overlay</span>
			</Overlay>,
		);

		await waitFor(() => {
			expect(screen.getByTestId('overlay')).not.toBeNull();
		});
	});
});
