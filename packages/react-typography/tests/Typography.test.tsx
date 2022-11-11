import { accessibility, render, screen } from '@project44-manifest/react-test-utils';
import { Typography, TypographyVariant } from '../src';

describe('@project44-manifest/react-typography', () => {
	accessibility(<Typography>Hello World</Typography>);

	it('should render correctly', () => {
		render(<Typography>Hello World</Typography>);

		const typography = screen.getByText('Hello World');

		expect(typography.nodeName).toBe('P');
	});

	it.each`
		tag       | variant
		${'H1'}   | ${'display'}
		${'H2'}   | ${'heading'}
		${'H3'}   | ${'title'}
		${'H4'}   | ${'subtitle'}
		${'P'}    | ${'body'}
		${'P'}    | ${'bodyBold'}
		${'SPAN'} | ${'caption'}
		${'SPAN'} | ${'captionBold'}
		${'SPAN'} | ${'subtext'}
		${'SPAN'} | ${'subtextBold'}
	`('should render a $tag for the $variant variant', ({ tag, variant }) => {
		render(<Typography variant={variant as TypographyVariant}>Hello World</Typography>);

		const typography = screen.getByText('Hello World');

		expect(typography.nodeName).toBe(tag);
	});

	it('should render paragraphs correctly', () => {
		render(
			<Typography paragraph variant="title">
				Hello World
			</Typography>,
		);

		const typography = screen.getByText('Hello World');

		expect(typography.nodeName).toBe('P');
	});
});
