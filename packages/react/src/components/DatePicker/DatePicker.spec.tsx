import * as React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { DatePicker } from './DatePicker';
import { Provider } from '../Provider';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/react - DatePicker', () => {
	it('should have no accessibility violations', async () => {
		const { container } = render(
			<Provider>
				<DatePicker aria-label="Calendar" isOpen />
			</Provider>,
		);

		const results = await axe(container);

		expect(results).toHaveNoViolations();
	});

	it('should support selecting a date', async () => {
		const onChange = jest.fn();

		render(
			<Provider>
				<DatePicker
					aria-label="Calendar"
					defaultValue={new CalendarDate(2022, 7, 12)}
					onChange={onChange}
				/>
			</Provider>,
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
			<Provider>
				<DatePicker
					aria-label="Calendar"
					value={new CalendarDate(2022, 7, 12)}
					onChange={onChange}
				/>
			</Provider>,
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
		render(
			<Provider>
				<DatePicker aria-label="Calendar" />
			</Provider>,
		);

		fireEvent.click(screen.getByRole('button'));

		const dialog = screen.getByRole('presentation');

		expect(dialog).toBeInTheDocument();

		await userEvent.click(document.body);

		await waitFor(() => {
			expect(dialog).not.toBeInTheDocument();
		});
	});
});
