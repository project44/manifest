import { act, fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Popover } from './Popover';
import { Provider } from '../Provider';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/react - Popover', () => {
	it('should have no accessibility violations', async () => {
		const { container } = render(
			<Provider>
				<Popover aria-label="Popover">
					<div data-testid="popover">Popover</div>
				</Popover>
			</Provider>,
		);

		expect(await axe(container)).toHaveNoViolations();
	});

	it('should render and support close events', async () => {
		const onClose = jest.fn();

		render(
			<Provider>
				<Popover isOpen onClose={onClose}>
					<span data-testid="popover">Popover</span>
				</Popover>
			</Provider>,
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
			<Provider>
				<Popover isOpen onClose={onClose} shouldCloseOnBlur>
					<span data-testid="popover">Popover</span>
					<button {...buttonProps}>click me</button>
				</Popover>
			</Provider>,
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
