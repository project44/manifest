import { accessibility, render, screen } from '@project44-manifest/test-utils';
import { TextFieldBase } from '../src/components/TextFieldBase';

describe('@project44-manifest/components - TextFieldBase', () => {
	accessibility(<TextFieldBase inputProps={{ 'aria-label': 'text field' }} />);

	it('should render', () => {
		render(<TextFieldBase endIcon={<span>end icon</span>} startIcon={<span>start icon</span>} />);

		expect(screen.getByText('end icon')).toBeInTheDocument();
		expect(screen.getByText('start icon')).toBeInTheDocument();
	});

	it('should support multiline fields', () => {
		render(<TextFieldBase multiline />);

		expect(screen.getByRole('textbox')).toHaveAttribute('rows');
	});
});
