import * as React from 'react';
import { useControlledState } from '@react-stately/utils';
import { ChevronLeft, ChevronRight } from '@project44-manifest/react-icons';
import { cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { noop } from '../../utils';
import { PaginationItem } from '../PaginationItem';
import { Typography } from '../Typography';
import { StyledPagination } from './Pagination.styles';
import type { PaginationElement, PaginationProps } from './Pagination.types';

type PageType = number | 'dots' | 'next' | 'previous';

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i);
};

const defaultPagiationLabel = ({ count, from, to }: { count: number; from: number; to: number }) =>
  `${from}-${to} of ${count}`;

function defaultGetItemAriaLabel(
  type: 'next' | 'page' | 'previous',
  page?: number,
  isActive?: boolean,
) {
  if (type === 'page') {
    return `${isActive ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
}

export const Pagination = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    boundaries = 1,
    children,
    className: classNameProp,
    css,
    defaultPage = 1,
    getPaginationLabel = defaultPagiationLabel,
    getItemAriaLabel = defaultGetItemAriaLabel,
    onChange = noop,
    nextLabel = 'Next',
    page = 1,
    previousLabel = 'Previous',
    rowsPerPage = 10,
    siblings = 1,
    showLabel = false,
    showPageNumbers = true,
    totalRowCount = 1,
    ...other
  } = props;

  const [activePage, setActivePage] = useControlledState(page, defaultPage, onChange);

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);

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

  const next = React.useCallback(
    () => void setActivePage(Number(activePage) + 1),
    [activePage, setActivePage],
  );
  const previous = React.useCallback(
    () => void setActivePage(Number(activePage) - 1),
    [activePage, setActivePage],
  );
  const setPage = (pageNumber: number) => () => void setActivePage(pageNumber);

  const className = cx('manifest-pagination', classNameProp);

  return (
    <StyledPagination {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {showLabel && (
        <div className="manifest-pagination__label">
          <Typography>
            {getPaginationLabel({
              count: totalRowCount,
              from: (page - 1) * rowsPerPage + 1,
              to: Math.min(totalRowCount, rowsPerPage * page),
            })}
          </Typography>
        </div>
      )}
      <div className="manifest-pagination__actions">
        <PaginationItem
          aria-label={getItemAriaLabel('previous')}
          isDisabled={activePage === 1}
          onPress={previous}
        >
          <ChevronLeft aria-hidden className="manifest-pagination-item__icon--start" />
          <Typography variant="subtextBold">{previousLabel}</Typography>
        </PaginationItem>

        {showPageNumbers &&
          pages.map((item, index) => (
            <React.Fragment key={item}>
              {item === 'dots' && (
                <div aria-hidden className="manifest-pagination__ellipsis">
                  <Typography variant="subtextBold">...</Typography>
                </div>
              )}
              {item !== 'dots' && (
                <PaginationItem
                  aria-current={item === activePage ? 'true' : undefined}
                  aria-label={getItemAriaLabel('page', item as number, item === activePage)}
                  isActive={item === activePage}
                  onPress={setPage(item as number)}
                >
                  <Typography variant="subtextBold">{item.toString()}</Typography>
                </PaginationItem>
              )}
            </React.Fragment>
          ))}

        <PaginationItem
          aria-label={defaultGetItemAriaLabel('next')}
          isDisabled={activePage === pageCount}
          onPress={next}
        >
          <Typography variant="subtextBold">{nextLabel}</Typography>
          <ChevronRight aria-hidden className="manifest-pagination-item__icon--end" />
        </PaginationItem>
      </div>
    </StyledPagination>
  );
}) as ForwardRefComponent<PaginationElement, PaginationProps>;
