import * as React from 'react';
import { Fragment, useMemo } from 'react';
import { useControlledState } from '@react-stately/utils';
import { cx } from '@project44-manifest/react-styles';
import { As, createComponent, Options, Props } from '@project44-manifest/system';
import type { StyleProps } from '../../types';
import { Icon } from '../Icon';
import { PaginationItem } from '../PaginationItem';
import { Typography } from '../Typography';
import { useStyles } from './Pagination.styles';

type PageType = number | 'dots' | 'next' | 'previous';
type PaginationElement = 'div';

export interface PaginationOptions<T extends As = PaginationElement>
  extends Options<T>,
    StyleProps {
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
   * Whether to show page numbers buttons.
   *
   * @default true
   */
  showPageNumbers?: boolean;
  /**
   * The number of pages to display before and after the current selected page.
   *
   * @default 1
   */
  siblings?: number;
  /**
   * The total number of rows in the table.
   */
  totalRowCount?: number;
  /**
   * Callback executed on page change.
   */
  onChange?: (page: number) => void;
}

export type PaginationProps<T extends As = PaginationElement> = Props<PaginationOptions<T>>;

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i);
};

export const Pagination = createComponent<PaginationOptions>((props, forwardedRef) => {
  const {
    as: Comp = 'div',
    boundaries = 1,
    className: classNameProp,
    css,
    defaultPage = 1,
    onChange = () => {
      // noop
    },
    page = 1,
    rowsPerPage = 10,
    siblings = 1,
    showPageNumbers = true,
    totalRowCount = 1,
    ...other
  } = props;

  const [activePage, setActivePage] = useControlledState(page, defaultPage, onChange);

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);

  const pages = useMemo((): PageType[] => {
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

  const { className } = useStyles({ css });

  return (
    <Comp
      {...other}
      ref={forwardedRef}
      className={cx(className, classNameProp, 'manifest-pagination')}
    >
      <PaginationItem
        aria-label="go to previous page"
        isDisabled={activePage === 1}
        onPress={previous}
      >
        <Icon className="manifest-pagination-item__icon--start" icon="keyboard_arrow_left" />
        <Typography variant="subtextBold">Previous</Typography>
      </PaginationItem>

      {showPageNumbers &&
        pages.map((item, index) => (
          <Fragment key={item}>
            {item === 'dots' && (
              <div aria-hidden className="manifest-pagination__ellipsis">
                <Typography variant="subtextBold">...</Typography>
              </div>
            )}
            {item !== 'dots' && (
              <PaginationItem
                aria-current={item === activePage ? 'true' : undefined}
                aria-label={`${item === activePage ? '' : 'go to '}page ${String(item)}`}
                isActive={item === activePage}
                onPress={setPage(item as number)}
              >
                <Typography variant="subtextBold">{item.toString()}</Typography>
              </PaginationItem>
            )}
          </Fragment>
        ))}

      <PaginationItem
        aria-label="go to next page"
        isDisabled={activePage === pageCount}
        onPress={next}
      >
        <Typography variant="subtextBold">Next</Typography>
        <Icon className="manifest-pagination-item__icon--end" icon="keyboard_arrow_right" />
      </PaginationItem>
    </Comp>
  );
});
