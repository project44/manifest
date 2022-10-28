import { accessibility, fireEvent, render, screen } from '@project44-manifest/test-utils';
import { Button } from '../src';

describe('react-button - Button', () => {
	accessibility(<Button>Click Me</Button>);

	it('should render', () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole('button');

		expect(button).toBeVisible();
		expect(button).toHaveAttribute('type', 'button');
	});

	it('should render icons', () => {
		render(
			<Button endIcon={<span data-testid="end" />} startIcon={<span data-testid="start" />}>
				Click Me
			</Button>,
		);

		expect(screen.getByTestId('end')).toBeVisible();
		expect(screen.getByTestId('start')).toBeVisible();
	});

	it('should handle click events', () => {
		const onClick = jest.fn();

		render(<Button onClick={onClick}>Click Me</Button>);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	it('should handle press events', () => {
		const onPress = jest.fn();

		render(<Button onPress={onPress}>Click Me</Button>);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(onPress).toHaveBeenCalled();
	});

	it('should handle disabled button', () => {
		const clickSpy = jest.fn();

		render(
			<Button isDisabled onClick={clickSpy}>
				Click Me
			</Button>,
		);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(clickSpy).not.toHaveBeenCalled();
	});
});
