import * as React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Calendar } from './Calendar';
import { CalendarDate } from '@internationalized/date';
import { CalendarRange } from './CalendarRange';

describe('@project44-manifest/components - Calendar', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Calendar />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a default value', async () => {
    const { container } = render(<Calendar defaultValue={new CalendarDate(2022, 7, 12)} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a value', async () => {
    const { container } = render(<Calendar value={new CalendarDate(2022, 7, 12)} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a default range value', async () => {
    const { container } = render(
      <CalendarRange
        defaultValue={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations when passed a range value', async () => {
    const { container } = render(
      <CalendarRange
        value={{
          start: new CalendarDate(2022, 7, 2),
          end: new CalendarDate(2022, 7, 12),
        }}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should support month navigation', () => {
    render(<Calendar defaultValue={new CalendarDate(2022, 6, 12)} />);

    const nextButton = screen.getByLabelText('Next');
    const prevButton = screen.getByLabelText('Previous');

    fireEvent.click(nextButton);

    expect(screen.getAllByText('July 2022')[1]).toBeVisible();

    fireEvent.click(prevButton);

    expect(screen.getAllByText('June 2022')[1]).toBeVisible();
  });

  it('should autofocus the selected date', () => {
    render(
      // eslint-disable-next-line jsx-a11y/no-autofocus
      <Calendar autoFocus value={new CalendarDate(2022, 7, 12)} />,
    );

    const cell = screen.getByLabelText('selected', { exact: false });
    const grid = screen.getByRole('grid');

    expect(cell.parentElement).toHaveAttribute('role', 'gridcell');
    expect(cell.parentElement).toHaveAttribute('aria-selected', 'true');

    expect(cell).toHaveFocus();

    expect(grid).not.toHaveAttribute('aria-activedescendant');
  });

  it('should navigate using the keyboard', () => {
    const onChange = jest.fn();

    render(<Calendar defaultValue={new CalendarDate(2022, 7, 12)} onChange={onChange} />);

    const grid = screen.getByRole('grid');
    let selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');

    fireEvent.keyDown(grid, { key: 'ArrowLeft' });
    fireEvent.keyDown(grid, { key: 'Enter' });

    selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('11');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toEqual(new CalendarDate(2022, 7, 11));

    fireEvent.keyDown(grid, { key: 'ArrowRight' });
    fireEvent.keyDown(grid, { key: ' ' });

    selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][0]).toEqual(new CalendarDate(2022, 7, 12));
  });

  it('should support being controlled', () => {
    const onChange = jest.fn();

    render(<Calendar onChange={onChange} value={new CalendarDate(2022, 7, 12)} />);

    fireEvent.click(screen.getByText('13'));

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toEqual(new CalendarDate(2022, 7, 13));
  });

  it('should support being disabled', () => {
    const onChange = jest.fn();

    render(<Calendar isDisabled onChange={onChange} value={new CalendarDate(2022, 7, 12)} />);

    fireEvent.click(screen.getByText('13'));

    expect(() => {
      screen.getAllByLabelText('selected', { exact: false });
    }).toThrow();

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should support being readonly', () => {
    const onChange = jest.fn();

    render(<Calendar isReadOnly onChange={onChange} value={new CalendarDate(2022, 7, 12)} />);

    fireEvent.click(screen.getByText('13'));

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should return a css selector', () => {
    expect(Calendar.toString()).toBe('.manifest-calendar');
  });
});
