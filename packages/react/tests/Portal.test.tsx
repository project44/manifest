import * as React from 'react';
import { render, screen } from '@project44-manifest/react-test-utils';
import { Portal } from '../src';

describe('@project44-manifest/react - Portal', () => {
	it('should render children', () => {
		render(
			<Portal>
				<span data-testid="child" />
			</Portal>,
		);

		expect(screen.getByTestId('child')).toBeVisible();
	});

	it('should render children in a container', () => {
		const container = document.createElement('div');

		document.body.append(container);

		function Component() {
			const ref = React.useRef<HTMLDivElement>(null);

			if (ref.current === null) {
				// @ts-expect-error: current reassignment is fine.
				ref.current = container;
			}

			return (
				<Portal containerRef={ref}>
					<span data-testid="child" />
				</Portal>
			);
		}

		render(<Component />);

		expect(container).toContainElement(screen.getByTestId('child'));

		container.remove();
	});
});
