import { accessibility, fireEvent, render, screen } from '@project44-manifest/test-utils';
import { Button, ButtonSize, ButtonVariant } from '../src';

describe('@project44-manifest/react - Button', () => {
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

		expect(button.classList).toContain('manifest-button-disabled');

		fireEvent.click(button);

		expect(clickSpy).not.toHaveBeenCalled();
	});

	it.each`
		variant        | className
		${'primary'}   | ${'manifest-button-primary'}
		${'secondary'} | ${'manifest-button-secondary'}
		${'tertiary'}  | ${'manifest-button-tertiary'}
		${'danger'}    | ${'manifest-button-danger'}
		${'brand'}     | ${'manifest-button-brand'}
	`('should attach the $className className for the $variant variant', ({ className, variant }) => {
		render(<Button variant={variant as ButtonVariant}>Click Me</Button>);

		const button = screen.getByRole('button');

		expect(button.classList).toContain(className);
	});

	it.each`
		size        | className
		${'medium'} | ${'manifest-button-medium'}
		${'small'}  | ${'manifest-button-small'}
	`('should attach the $className className for the $size size', ({ className, size }) => {
		render(<Button size={size as ButtonSize}>Click Me</Button>);

		const button = screen.getByRole('button');

		expect(button.classList).toContain(className);
	});
});
