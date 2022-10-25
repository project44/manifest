import { render, screen } from '@project44-manifest/react-test-utils';
import { Container } from '../src';

describe('react-layout - Container', () => {
	it('should render correctly', () => {
		render(<Container>Hello World</Container>);

		const container = screen.getByText('Hello World');

		expect(container).toBeVisible();
	});

	it.each`
		maxWidth     | className
		${'large'}   | ${'manifest-container-maxWidthLarge'}
		${'medium'}  | ${'manifest-container-maxWidthMedium'}
		${'small'}   | ${'manifest-container-maxWidthSmall'}
		${'x-large'} | ${'manifest-container-maxWidthXLarge'}
		${'x-small'} | ${'manifest-container-maxWidthXSmall'}
	`(
		'should attach the $className className for the $maxWidth maxWidth prop',
		({ className, maxWidth }) => {
			render(<Container maxWidth={maxWidth}>Hello World</Container>);

			const container = screen.getByText('Hello World');

			expect(container.classList).toContain(className);
		},
	);

	it('should attach the fixed className for a fixed container', () => {
		render(<Container fixed>Hello World</Container>);

		const container = screen.getByText('Hello World');

		expect(container.classList).toContain('manifest-container-fixed');
	});

	it('should support class overrides', () => {
		render(
			<Container classes={{ root: 'custom-class', maxWidthLarge: 'custom-maxWidthLarge-class' }}>
				Hello World
			</Container>,
		);

		const container = screen.getByText('Hello World');

		expect(container.classList).toContain('manifest-container-root');
		expect(container.classList).toContain('custom-class');
		expect(container.classList).toContain('manifest-container-maxWidthLarge');
		expect(container.classList).toContain('custom-maxWidthLarge-class');
	});
});
