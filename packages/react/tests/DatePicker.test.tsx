import { CalendarDate } from '@internationalized/date';
import {
	accessibility,
	fireEvent,
	render,
	screen,
	userEvent,
	waitFor,
} from '@project44-manifest/react-test-utils';
import { DatePicker } from '../src';

describe('@project44-manifest/react - DatePicker', () => {
	accessibility(<DatePicker isOpen aria-label="Calendar" />);

	it('should support selecting a date', async () => {
		const onChange = jest.fn();

		render(
			<DatePicker
				aria-label="Calendar"
				defaultValue={new CalendarDate(2022, 7, 12)}
				onChange={onChange}
			/>,
		);

		expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

		fireEvent.click(screen.getByRole('button'));

		const dialog = screen.getByRole('presentation');

		expect(dialog).toBeInTheDocument();

		const selectedDate = screen.getByLabelText('selected', { exact: false });

		expect(selectedDate.textContent).toBe('12');

		fireEvent.click(screen.getByText('13'));

		await waitFor(() => {
			expect(dialog).not.toBeInTheDocument();
		});

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
	});

	it('should support being controlled', async () => {
		const onChange = jest.fn();

		render(
			<DatePicker
				aria-label="Calendar"
				value={new CalendarDate(2022, 7, 12)}
				onChange={onChange}
			/>,
		);

		expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

		fireEvent.click(screen.getByRole('button'));

		const dialog = screen.getByRole('presentation');

		expect(dialog).toBeInTheDocument();

		const selectedDate = screen.getByLabelText('selected', { exact: false });

		expect(selectedDate.textContent).toBe('12');

		fireEvent.click(screen.getByText('13'));

		await waitFor(() => {
			expect(dialog).not.toBeInTheDocument();
		});

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
	});

	it('should close datepicker when outside click is register', async () => {
		render(<DatePicker aria-label="Calendar" />);

		fireEvent.click(screen.getByRole('button'));

		const dialog = screen.getByRole('presentation');

		expect(dialog).toBeInTheDocument();

		await userEvent.click(document.body);

		await waitFor(() => {
			expect(dialog).not.toBeInTheDocument();
		});
	});
});
