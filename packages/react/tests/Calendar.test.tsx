import { CalendarDate } from '@internationalized/date';
import { accessibility, fireEvent, render, screen } from '@project44-manifest/react-test-utils';
import { Calendar } from '../src';

describe('@project44-manifest/react - Calendar', () => {
  accessibility(<Calendar />);

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
    // eslint-disable-next-line jsx-a11y/no-autofocus
    render(<Calendar autoFocus value={new CalendarDate(2022, 7, 12)} />);

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

    render(<Calendar value={new CalendarDate(2022, 7, 12)} onChange={onChange} />);

    fireEvent.click(screen.getByText('13'));

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0]).toEqual(new CalendarDate(2022, 7, 13));
  });

  it('should support being disabled', () => {
    const onChange = jest.fn();

    render(<Calendar isDisabled value={new CalendarDate(2022, 7, 12)} onChange={onChange} />);

    fireEvent.click(screen.getByText('13'));

    expect(() => {
      screen.getAllByLabelText('selected', { exact: false });
    }).toThrow();

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should support being readonly', () => {
    const onChange = jest.fn();

    render(<Calendar isReadOnly value={new CalendarDate(2022, 7, 12)} onChange={onChange} />);

    fireEvent.click(screen.getByText('13'));

    const selectedDate = screen.getByLabelText('selected', { exact: false });

    expect(selectedDate.textContent).toBe('12');
    expect(onChange).not.toHaveBeenCalled();
  });
});
