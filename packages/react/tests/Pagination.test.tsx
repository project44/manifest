import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from '../src/components/Pagination';

describe('pagination', () => {
  it('should render', () => {
    const setPage = jest.fn();
    render(<Pagination page={1} totalRowCount={100} onChange={setPage} />);

    expect(screen.getByLabelText('go to previous page')).toBeDefined();
    expect(screen.getByText('Previous')).toBeDefined();
    expect(screen.getByLabelText('go to next page')).toBeDefined();
    expect(screen.getByText('Next')).toBeDefined();
    expect(screen.getByLabelText('page 1')).toBeDefined();
  });

  it('should change current page when clicked', () => {
    const setPage = jest.fn();
    render(<Pagination page={1} totalRowCount={100} onChange={setPage} />);

    const nextButton = screen.getByLabelText('go to next page');

    fireEvent.click(nextButton);

    expect(setPage).toHaveBeenCalled();
  });
});
