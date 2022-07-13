import * as React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CalendarDate } from '@internationalized/date';
import { DatePicker } from './DatePicker';
import { OverlayProvider } from '@react-aria/overlays';
import userEvent from '@testing-library/user-event';

describe('@project44-manifest/components - Calendar', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <OverlayProvider>
        <DatePicker />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a default value', async () => {
    const { container } = render(
      <OverlayProvider>
        <DatePicker defaultValue={new CalendarDate(2022, 7, 12)} />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a value', async () => {
    const { container } = render(
      <OverlayProvider>
        <DatePicker value={new CalendarDate(2022, 7, 12)} />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when displaying a start icon', async () => {
    const { container } = render(
      <OverlayProvider>
        <DatePicker startIcon={<span>icon</span>} value={new CalendarDate(2022, 7, 12)} />
      </OverlayProvider>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support selecting a date', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DatePicker defaultValue={new CalendarDate(2022, 7, 12)} onChange={onChange} />
      </OverlayProvider>,
    );

    expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');

    fireEvent.click(screen.getByText('13'));

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(
      <OverlayProvider>
        <DatePicker value={new CalendarDate(2022, 7, 12)} onChange={onChange} />
      </OverlayProvider>,
    );

    expect(screen.getByText('7 / 12 / 2022')).toBeVisible();

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');

    fireEvent.click(screen.getByText('13'));

    expect(dialog).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(new CalendarDate(2022, 7, 13));
  });

  it('should close datepicker when outside click is register', async () => {
    render(
      <OverlayProvider>
        <DatePicker defaultValue={new CalendarDate(2022, 7, 12)} />
      </OverlayProvider>,
    );

    fireEvent.click(screen.getByRole('button'));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();

    await userEvent.click(document.body);

    expect(dialog).not.toBeInTheDocument();
  });

  it('should return a css selector', () => {
    expect(DatePicker.toString()).toBe('.manifest-datepicker');
  });
});
