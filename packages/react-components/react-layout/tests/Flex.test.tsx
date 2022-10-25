import { render, screen } from '@project44-manifest/react-test-utils';
import { Flex } from '../src';

describe('react-layout - Flex', () => {
	it('should render correctly', () => {
		render(<Flex>Hello World</Flex>);

		const flex = screen.getByText('Hello World');

		expect(flex).toBeVisible();
	});

	it.each`
		align         | className
		${'baseline'} | ${'manifest-flex-alignBaseline'}
		${'center'}   | ${'manifest-flex-alignCenter'}
		${'end'}      | ${'manifest-flex-alignEnd'}
		${'start'}    | ${'manifest-flex-alignStart'}
	`('should attach the $className className for the $align align prop', ({ className, align }) => {
		render(<Flex align={align}>Hello World</Flex>);

		const flex = screen.getByText('Hello World');

		expect(flex.classList).toContain(className);
	});

	it.each`
		gap          | className
		${'large'}   | ${'manifest-flex-gapLarge'}
		${'medium'}  | ${'manifest-flex-gapMedium'}
		${'small'}   | ${'manifest-flex-gapSmall'}
		${'x-large'} | ${'manifest-flex-gapXLarge'}
		${'x-small'} | ${'manifest-flex-gapXSmall'}
	`('should attach the $className className for the $gap gap prop', ({ className, gap }) => {
		render(<Flex gap={gap}>Hello World</Flex>);

		const flex = screen.getByText('Hello World');

		expect(flex.classList).toContain(className);
	});

	it.each`
		justify      | className
		${'around'}  | ${'manifest-flex-justifyAround'}
		${'between'} | ${'manifest-flex-justifyBetween'}
		${'center'}  | ${'manifest-flex-justifyCenter'}
		${'end'}     | ${'manifest-flex-justifyEnd'}
		${'start'}   | ${'manifest-flex-justifyStart'}
	`(
		'should attach the $className className for the $justify justify prop',
		({ className, justify }) => {
			render(<Flex justify={justify}>Hello World</Flex>);

			const flex = screen.getByText('Hello World');

			expect(flex.classList).toContain(className);
		},
	);

	it.each`
		orientation     | className
		${'horizontal'} | ${'manifest-flex-horizontal'}
		${'vertical'}   | ${'manifest-flex-vertical'}
	`(
		'should attach the $className className for the $orientation orientation prop',
		({ className, orientation }) => {
			render(<Flex orientation={orientation}>Hello World</Flex>);

			const flex = screen.getByText('Hello World');

			expect(flex.classList).toContain(className);
		},
	);

	it('should attach the wrap className for a wrapped container', () => {
		render(<Flex wrap>Hello World</Flex>);

		const flex = screen.getByText('Hello World');

		expect(flex.classList).toContain('manifest-flex-wrap');
	});

	it('should support class overrides', () => {
		render(
			<Flex wrap classes={{ root: 'custom-class', wrap: 'custom-wrap-class' }}>
				Hello World
			</Flex>,
		);

		const flex = screen.getByText('Hello World');

		expect(flex.classList).toContain('manifest-flex-root');
		expect(flex.classList).toContain('custom-class');
		expect(flex.classList).toContain('manifest-flex-wrap');
		expect(flex.classList).toContain('custom-wrap-class');
	});
});
