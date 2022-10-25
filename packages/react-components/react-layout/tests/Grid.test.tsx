import { render, screen } from '@project44-manifest/react-test-utils';
import { Grid } from '../src';

describe('react-layout - Grid', () => {
	it('should render correctly', () => {
		render(<Grid>Hello World</Grid>);

		const container = screen.getByText('Hello World');

		expect(container).toBeVisible();
	});

	it.each`
		columnGap    | className
		${'large'}   | ${'manifest-grid-columnGapLarge'}
		${'medium'}  | ${'manifest-grid-columnGapMedium'}
		${'small'}   | ${'manifest-grid-columnGapSmall'}
		${'x-large'} | ${'manifest-grid-columnGapXLarge'}
		${'x-small'} | ${'manifest-grid-columnGapXSmall'}
	`(
		'should attach the $className className for the $columnGap columnGap prop',
		({ className, columnGap }) => {
			render(<Grid columnGap={columnGap}>Hello World</Grid>);

			const stack = screen.getByText('Hello World');

			expect(stack.classList).toContain(className);
		},
	);

	it.each`
		gap          | className
		${'large'}   | ${'manifest-grid-gapLarge'}
		${'medium'}  | ${'manifest-grid-gapMedium'}
		${'small'}   | ${'manifest-grid-gapSmall'}
		${'x-large'} | ${'manifest-grid-gapXLarge'}
		${'x-small'} | ${'manifest-grid-gapXSmall'}
	`('should attach the $className className for the $gap gap prop', ({ className, gap }) => {
		render(<Grid gap={gap}>Hello World</Grid>);

		const stack = screen.getByText('Hello World');

		expect(stack.classList).toContain(className);
	});

	it.each`
		rowGap       | className
		${'large'}   | ${'manifest-grid-rowGapLarge'}
		${'medium'}  | ${'manifest-grid-rowGapMedium'}
		${'small'}   | ${'manifest-grid-rowGapSmall'}
		${'x-large'} | ${'manifest-grid-rowGapXLarge'}
		${'x-small'} | ${'manifest-grid-rowGapXSmall'}
	`(
		'should attach the $className className for the $rowGap rowGap prop',
		({ className, rowGap }) => {
			render(<Grid rowGap={rowGap}>Hello World</Grid>);

			const stack = screen.getByText('Hello World');

			expect(stack.classList).toContain(className);
		},
	);

	it('should support class overrides', () => {
		render(
			<Grid classes={{ root: 'custom-class', gapLarge: 'custom-gap-class' }} gap="large">
				Hello World
			</Grid>,
		);

		const container = screen.getByText('Hello World');

		expect(container.classList).toContain('manifest-grid-root');
		expect(container.classList).toContain('custom-class');
		expect(container.classList).toContain('manifest-grid-gapLarge');
		expect(container.classList).toContain('custom-gap-class');
	});
});
