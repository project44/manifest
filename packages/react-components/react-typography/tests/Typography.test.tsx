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
		tag       | variant          | className
		${'H1'}   | ${'display'}     | ${'manifest-typography-display'}
		${'H2'}   | ${'heading'}     | ${'manifest-typography-heading'}
		${'H3'}   | ${'title'}       | ${'manifest-typography-title'}
		${'H4'}   | ${'subtitle'}    | ${'manifest-typography-subtitle'}
		${'P'}    | ${'body'}        | ${'manifest-typography-body'}
		${'P'}    | ${'bodyBold'}    | ${'manifest-typography-bodyBold'}
		${'SPAN'} | ${'caption'}     | ${'manifest-typography-caption'}
		${'SPAN'} | ${'captionBold'} | ${'manifest-typography-captionBold'}
		${'SPAN'} | ${'subtext'}     | ${'manifest-typography-subtext'}
		${'SPAN'} | ${'subtextBold'} | ${'manifest-typography-subtextBold'}
	`(
		'should render a $tag and attach the $className className for the $variant variant',
		({ className, tag, variant }) => {
			render(<Typography variant={variant as TypographyVariant}>Hello World</Typography>);

			const typography = screen.getByText('Hello World');

			expect(typography.nodeName).toBe(tag);
			expect(typography.classList).toContain(className);
		},
	);

	it('should render paragraphs correctly', () => {
		render(
			<Typography paragraph variant="title">
				Hello World
			</Typography>,
		);

		const typography = screen.getByText('Hello World');

		expect(typography.nodeName).toBe('P');
		expect(typography.classList).toContain('manifest-typography-paragraph');
		expect(typography.classList).toContain('manifest-typography-title');
	});

	it('should support class overrides', () => {
		render(
			<Typography classes={{ root: 'custom-class', title: 'custom-title-class' }} variant="title">
				Hello World
			</Typography>,
		);

		const typography = screen.getByText('Hello World');

		expect(typography.classList).toContain('manifest-typography-root');
		expect(typography.classList).toContain('custom-class');
		expect(typography.classList).toContain('manifest-typography-title');
		expect(typography.classList).toContain('custom-title-class');
	});
});
