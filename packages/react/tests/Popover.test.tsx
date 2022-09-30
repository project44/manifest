import {
	accessibility,
	act,
	fireEvent,
	render,
	screen,
	userEvent,
} from '@project44-manifest/test-utils';
import { Popover } from '../src';

describe('@project44-manifest/react - Popover', () => {
	accessibility(
		<Popover aria-label="Popover">
			<div data-testid="popover">Popover</div>
		</Popover>,
	);

	it('should render and support close events', async () => {
		const onClose = jest.fn();

		render(
			<Popover isOpen onClose={onClose}>
				<span data-testid="popover">Popover</span>
			</Popover>,
		);

		const popover = screen.getByText('Popover');

		expect(popover).toBeVisible();

		fireEvent.keyDown(popover, { key: 'Escape' });
		fireEvent.keyUp(popover, { key: 'Escape' });

		expect(onClose).toHaveBeenCalledTimes(1);

		await userEvent.click(document.body);

		expect(onClose).toHaveBeenCalledTimes(2);
	});

	it('should support blur on close', () => {
		const onClose = jest.fn();

		const buttonProps = {
			autoFocus: true,
		};

		render(
			<Popover isOpen shouldCloseOnBlur onClose={onClose}>
				<span data-testid="popover">Popover</span>
				<button {...buttonProps}>click me</button>
			</Popover>,
		);

		const button = screen.getAllByRole('button')[1];
		const popover = screen.getByText('Popover');

		expect(popover).toBeVisible();

		expect(document.activeElement).toBe(button);

		act(() => {
			button.blur();
		});

		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
