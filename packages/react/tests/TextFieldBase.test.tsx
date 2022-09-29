import { screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { TextFieldBase } from '../src/components/TextFieldBase';

describe('@project44-manifest/components - TextFieldBase', () => {
	it('should pass accessibility', async () => {
		const { container } = render(<TextFieldBase inputProps={{ 'aria-label': 'text field' }} />);

		expect(await axe(container)).toHaveNoViolations();
	});

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
