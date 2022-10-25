import { render, screen } from '@project44-manifest/react-test-utils';
import { Stack } from '../src';

describe('react-layout - Stack', () => {
	it('should render correctly', () => {
		render(<Stack>Hello World</Stack>);

		const stack = screen.getByText('Hello World');

		expect(stack).toBeVisible();
	});

	it.each`
		gap          | className
		${'large'}   | ${'manifest-stack-gapLarge'}
		${'medium'}  | ${'manifest-stack-gapMedium'}
		${'small'}   | ${'manifest-stack-gapSmall'}
		${'x-large'} | ${'manifest-stack-gapXLarge'}
		${'x-small'} | ${'manifest-stack-gapXSmall'}
	`('should attach the $className className for the $gap gap prop', ({ className, gap }) => {
		render(<Stack gap={gap}>Hello World</Stack>);

		const stack = screen.getByText('Hello World');

		expect(stack.classList).toContain(className);
	});

	it.each`
		orientation     | className
		${'horizontal'} | ${'manifest-stack-horizontal'}
		${'vertical'}   | ${'manifest-stack-vertical'}
	`(
		'should attach the $className className for the $orientation orientation prop',
		({ className, orientation }) => {
			render(<Stack orientation={orientation}>Hello World</Stack>);

			const stack = screen.getByText('Hello World');

			expect(stack.classList).toContain(className);
		},
	);
	it('should support class overrides', () => {
		render(
			<Stack classes={{ root: 'custom-class', gapLarge: 'custom-gap-class' }} gap="large">
				Hello World
			</Stack>,
		);

		const stack = screen.getByText('Hello World');

		expect(stack.classList).toContain('manifest-stack-root');
		expect(stack.classList).toContain('custom-class');
		expect(stack.classList).toContain('manifest-stack-gapLarge');
		expect(stack.classList).toContain('custom-gap-class');
	});
});
