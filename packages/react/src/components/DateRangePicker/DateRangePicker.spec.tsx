import * as React from 'react';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import { OverlayProvider } from '@react-aria/overlays';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/components - Calendar', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<DateRangePicker isOpen />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support selecting a date', async () => {
    const onChange = jest.fn();

    render(
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.filter(cell => cell.getAttribute('aria-selected') === 'true');

    expect(selected[0].children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should support being controlled', async () => {
    const onChange = jest.fn();

    render(
      <DateRangePicker
        value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        onChange={onChange}
      />,
    );

    expect(screen.getByText('7 / 2 / 2022 - 7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    const cells = screen.getAllByRole('gridcell');
    const selected = cells.filter(cell => cell.getAttribute('aria-selected') === 'true');

    expect(selected[0].children[0]).toHaveAttribute(
      'aria-label',
      'Selected Range: Saturday, July 2 to Tuesday, July 12, 2022, Saturday, July 2, 2022 selected',
    );

    fireEvent.click(screen.getByLabelText('Sunday, July 3, 2022 selected'));
    fireEvent.click(screen.getByLabelText('Sunday, July 17, 2022'));

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should close datepicker when outside click is register', async () => {
    render(
      <DateRangePicker
        defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
      />,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    await userEvent.click(document.body);

    await waitFor(() => {
      expect(dialog).not.toBeInTheDocument();
    });
  });
});
