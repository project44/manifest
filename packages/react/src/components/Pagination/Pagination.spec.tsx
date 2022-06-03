import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Pagination } from './Pagination';

describe('@manifest-ui/pagination', () => {
  it('should pass accessibility', async () => {
    const { container } = render(<Pagination totalRowCount={100} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render and support pagination events', () => {
    const container = render(<Pagination totalRowCount={100} />);

    expect(container.getAllByRole('button')[1]).toHaveAttribute('aria-current', 'true');

    // Displays ellipsis
    expect(container.getAllByText('...')).toHaveLength(1);

    fireEvent.click(container.getAllByRole('button')[5]);

    expect(container.getAllByText('...')).toHaveLength(2);

    fireEvent.click(container.getAllByRole('button')[1]);

    // Handles next click
    fireEvent.click(container.getByLabelText('go to next page'));

    expect(container.getAllByRole('button')[2]).toHaveAttribute('aria-current', 'true');

    // Handles next click
    fireEvent.click(container.getByLabelText('go to previous page'));

    expect(container.getAllByRole('button')[1]).toHaveAttribute('aria-current', 'true');
  });

  it('should render without page numbers', () => {
    const container = render(<Pagination totalRowCount={100} showPageNumbers={false} />);

    expect(container.getAllByRole('button')).toHaveLength(2);
  });

  it('should render the correct number of pages', () => {
    let currentPage = 1;
    let totalRowCount = 10;

    const container = render(<Pagination page={currentPage} totalRowCount={totalRowCount} />);

    expect(container.getAllByRole('button')).toHaveLength(3);

    // // Should display 1 page number and next and previous
    // expect(pages).toHaveLength(1);

    totalRowCount = 80;

    container.rerender(<Pagination page={currentPage} totalRowCount={totalRowCount} />);

    expect(container.getAllByRole('button')).toHaveLength(8);

    currentPage = 5;
    totalRowCount = 80;

    container.rerender(<Pagination page={currentPage} totalRowCount={totalRowCount} />);

    expect(container.getAllByRole('button')).toHaveLength(8);

    currentPage = 5;
    totalRowCount = 90;

    container.rerender(<Pagination page={currentPage} totalRowCount={totalRowCount} />);

    expect(container.getAllByRole('button')).toHaveLength(7);
  });
});
