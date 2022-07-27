import * as React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { DateRangePicker } from './DateRangePicker';
import { OverlayProvider } from '@react-aria/overlays';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/components - Calendar', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <OverlayProvider>
        <DateRangePicker />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a default value', async () => {
    const { container } = render(
      <OverlayProvider>
        <DateRangePicker
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a value', async () => {
    const { container } = render(
      <OverlayProvider>
        <DateRangePicker
          value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when displaying a start icon', async () => {
    const { container } = render(
      <OverlayProvider>
        <DateRangePicker
          startIcon={<span>icon</span>}
          value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support selecting a date', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DateRangePicker
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </OverlayProvider>,
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

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DateRangePicker
          value={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
          onChange={onChange}
        />
      </OverlayProvider>,
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

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      start: new CalendarDate(2022, 7, 3),
      end: new CalendarDate(2022, 7, 17),
    });
  });

  it('should close datepicker when outside click is register', async () => {
    render(
      <OverlayProvider>
        <DateRangePicker
          defaultValue={{ start: new CalendarDate(2022, 7, 2), end: new CalendarDate(2022, 7, 12) }}
        />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    await userEvent.click(document.body);

    expect(dialog).not.toBeInTheDocument();
  });

  it('should return a css selector', () => {
    expect(DateRangePicker.toString()).toBe('.manifest-datepicker');
  });
});
