import { accessibility, render, screen } from '@project44-manifest/react-test-utils';
import { Button, ButtonGroup } from '../src';

describe('react-button - ButtonGroup', () => {
	accessibility(
		<ButtonGroup>
			<Button>Cancel</Button>
			<Button>Save</Button>
		</ButtonGroup>,
	);

	it('should render', () => {
		render(
			<ButtonGroup data-testid="button-group">
				<Button>Cancel</Button>
				<Button>Save</Button>
			</ButtonGroup>,
		);

		const buttonGroup = screen.getByTestId('button-group');
		const buttons = screen.getAllByRole('button');

		expect(buttonGroup).toBeInTheDocument();
		expect(buttons).toHaveLength(2);
	});
});
