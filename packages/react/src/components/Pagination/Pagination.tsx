import type * as Radix from '@radix-ui/react-primitive';
import * as React from 'react';
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPaginationEllipsis,
} from './Pagination.styles';
import { Icon } from '../Icon';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Typography } from '../Typography';

type PageType = number | 'dots' | 'next' | 'previous';

export interface PaginationProps
  extends Omit<Radix.ComponentPropsWithoutRef<typeof StyledPagination>, 'onChange'> {
  /**
   * The outer visible boundaries of the pagination list.
   *
   * @default 1
   */
  boundaries?: number;
  /**
   * The default page number (uncontrolled).
   *
   * @default 1
   */
  defaultPage?: number;
  /**
   * The current page (controlled).
   */
  page?: number;
  /**
   * The number of rows rendered per page.
   *
   * @default 10
   */
  rowsPerPage?: number;
  /**
   * The number of pages to display before and after the current selected page.
   *
   * @default 1
   */
  siblings?: number;
  /**
   * Whether to show page numbers buttons.
   *
   * @default true
   */
  showPageNumbers?: boolean;
  /**
   * The total number of rows in the table.
   */
  totalRowCount?: number;
  /**
   * Callback executed on page change.
   */
  onChange?(page: number): void;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i);
};

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props: PaginationProps, ref) => {
    const {
      boundaries = 1,
      defaultPage = 1,
      onChange,
      page,
      rowsPerPage = 10,
      siblings = 1,
      showPageNumbers = true,
      totalRowCount = 1,
      ...other
    } = props;

    const pageCount = Math.ceil(totalRowCount / rowsPerPage);

    const [activePage, setActivePage] = useControllableState({
      prop: page,
      defaultProp: defaultPage,
      onChange,
    });

    const next = () => setActivePage(Number(activePage) + 1);
    const previous = () => setActivePage(Number(activePage) - 1);
    const setPage = (pageNumber: number) => setActivePage(pageNumber);

    const pages = React.useMemo((): PageType[] => {
      const startRange = range(1, Math.min(boundaries, pageCount));
      const endRange = range(Math.max(pageCount - boundaries + 1, boundaries + 1), pageCount);

      const startIndex = Math.max(
        Math.min(Number(activePage) - siblings, pageCount - boundaries - siblings * 2 - 1),
        boundaries + 2,
      );
      const endIndex = Math.min(
        Math.max(Number(activePage) + siblings, boundaries + siblings * 2 + 2),
        endRange.length > 0 ? endRange[0] - 2 : pageCount - 1,
      );

      // Show siblings or dots
      let siblingsEndRange: PageType[] =
        pageCount - boundaries > boundaries ? [pageCount - boundaries] : [];
      let siblingsStartRange: PageType[] =
        boundaries + 1 < pageCount - boundaries ? [boundaries + 1] : [];

      if (endIndex < pageCount - boundaries - 1) {
        siblingsEndRange = ['dots'];
      }

      if (startIndex > boundaries + 2) {
        siblingsStartRange = ['dots'];
      }

      return [
        ...startRange,
        ...siblingsStartRange,
        ...range(startIndex, endIndex),
        ...siblingsEndRange,
        ...endRange,
      ];
    }, [activePage, boundaries, pageCount, siblings]);

    return (
      <StyledPagination className="manifest-pagination" ref={ref} {...other}>
        <StyledPaginationButton
          aria-label="go to previous page"
          className="manifest-pagination--button"
          disabled={activePage === 1}
          onClick={previous}
        >
          <Icon icon="keyboard_arrow_left" />
          <Typography>Previous</Typography>
        </StyledPaginationButton>

        {showPageNumbers &&
          pages.map((item, index) => (
            <React.Fragment key={`${item}_${index}`}>
              {item === 'dots' && (
                <StyledPaginationEllipsis aria-hidden className="manifest-pagination--ellipsis">
                  <Typography>...</Typography>
                </StyledPaginationEllipsis>
              )}
              {item !== 'dots' && (
                <StyledPaginationButton
                  aria-current={item === activePage ? 'true' : undefined}
                  aria-label={`${item === activePage ? '' : 'go to '}page ${String(item)}`}
                  className="manifest-pagination--button"
                  isActive={item === activePage}
                  onClick={() => {
                    setPage(item as number);
                  }}
                >
                  <Typography>{item.toString()}</Typography>
                </StyledPaginationButton>
              )}
            </React.Fragment>
          ))}

        <StyledPaginationButton
          aria-label="go to next page"
          className="manifest-pagination--button"
          disabled={activePage === pageCount}
          onClick={next}
        >
          <Typography>Next</Typography>
          <Icon icon="keyboard_arrow_right" />
        </StyledPaginationButton>
      </StyledPagination>
    );
  },
);

Pagination.displayName = 'Pagination';
