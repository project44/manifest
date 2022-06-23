import type { AriaButtonProps } from '@react-types/button';
import * as React from 'react';
import { CSS, cx, usePaginationStyles, usePaginationButtonStyles } from './Pagination.styles';
import { mergeProps, mergeRefs } from '@react-aria/utils';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { useButton } from '@react-aria/button';
import { useControlledState } from '@react-stately/utils';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';

/**
 * -----------------------------------------------------------------------------------------------
 * Pagination
 * -----------------------------------------------------------------------------------------------
 */

type PaginationElement = React.ElementRef<'div'>;
type PaginationNativeProps = React.ComponentPropsWithoutRef<'div'>;

type PageType = number | 'dots' | 'next' | 'previous';

interface PaginationProps extends UsePaginationProps, Omit<PaginationNativeProps, 'onChange'> {
  /**
   * Theme aware style object.
   */
  css?: CSS;
  /**
   * The default page number (uncontrolled).
   *
   * @default 1
   */
  defaultPage?: number;
  /**
   * Whether to show page numbers buttons.
   *
   * @default true
   */
  showPageNumbers?: boolean;
  /**
   * Callback executed on page change.
   */
  onChange?(page: number): void;
}

const Pagination = React.forwardRef<PaginationElement, PaginationProps>(
  (props: PaginationProps, forwardedRef) => {
    const {
      boundaries,
      className: classNameProp,
      css,
      defaultPage = 1,
      onChange = () => {
        // noop
      },
      page = 1,
      rowsPerPage,
      siblings,
      showPageNumbers = true,
      totalRowCount,
      ...other
    } = props;

    const [activePage, setActivePage] = useControlledState(page, defaultPage, onChange);

    const [pages, pageCount] = usePagination({
      boundaries,
      page: activePage,
      rowsPerPage,
      siblings,
      totalRowCount,
    });

    const next = () => setActivePage(Number(activePage) + 1);
    const previous = () => setActivePage(Number(activePage) - 1);
    const setPage = (pageNumber: number) => setActivePage(pageNumber);

    const { className } = usePaginationStyles({ css });

    return (
      <div
        {...other}
        className={cx('manifest-pagination', className, classNameProp)}
        ref={forwardedRef}
      >
        <PaginationItem
          aria-label="go to previous page"
          isDisabled={activePage === 1}
          onPress={previous}
        >
          <Icon className="manifest-pagination-item--icon__start" icon="keyboard_arrow_left" />
          <Typography variant="subtextBold">Previous</Typography>
        </PaginationItem>

        {showPageNumbers &&
          pages.map((item, index) => (
            <React.Fragment key={`${item}_${index}`}>
              {item === 'dots' && (
                <div aria-hidden className="manifest-pagination--ellipsis">
                  <Typography variant="subtextBold">...</Typography>
                </div>
              )}
              {item !== 'dots' && (
                <PaginationItem
                  aria-current={item === activePage ? 'true' : undefined}
                  aria-label={`${item === activePage ? '' : 'go to '}page ${String(item)}`}
                  isActive={item === activePage}
                  onPress={() => setPage(item as number)}
                >
                  <Typography variant="subtextBold">{item.toString()}</Typography>
                </PaginationItem>
              )}
            </React.Fragment>
          ))}

        <PaginationItem
          aria-label="go to next page"
          isDisabled={activePage === pageCount}
          onPress={next}
        >
          <Typography variant="subtextBold">Next</Typography>
          <Icon className="manifest-pagination-item--icon__end" icon="keyboard_arrow_right" />
        </PaginationItem>
      </div>
    );
  },
);

Pagination.displayName = 'Pagination';

/**
 * -----------------------------------------------------------------------------------------------
 * Pagination Item
 * -----------------------------------------------------------------------------------------------
 */

type PaginationItemElement = React.ElementRef<'button'>;
type PaginationItemNativeProps = Omit<
  React.ComponentPropsWithoutRef<'button'>,
  keyof AriaButtonProps
>;

interface PaginationItemProps extends PaginationItemNativeProps, AriaButtonProps {
  /**
   * Whether the pagination item is active.
   */
  isActive?: boolean;
}

const PaginationItem = React.forwardRef<PaginationItemElement, PaginationItemProps>(
  (props, forwardedRef) => {
    const { autoFocus, children, className: classNameProp, isActive, isDisabled } = props;

    const itemRef = React.useRef<HTMLButtonElement>(null);

    const { buttonProps, isPressed } = useButton(
      { ...props, elementType: 'button', isDisabled },
      itemRef,
    );
    const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
    const { hoverProps, isHovered } = useHover({ isDisabled });

    const { className } = usePaginationButtonStyles({
      isActive,
      isDisabled,
      isFocusVisible,
      isHovered,
      isPressed,
    });

    return (
      <button
        {...mergeProps(buttonProps, focusProps, hoverProps)}
        className={cx('manifest-pagination-item', className, classNameProp)}
        ref={mergeRefs(itemRef, forwardedRef)}
      >
        {children}
      </button>
    );
  },
);

/**
 * -----------------------------------------------------------------------------------------------
 * usePagination
 * -----------------------------------------------------------------------------------------------
 */

interface UsePaginationProps {
  /**
   * The outer visible boundaries of the pagination list.
   *
   * @default 1
   */
  boundaries?: number;
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
   * The total number of rows in the table.
   */
  totalRowCount?: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, i) => start + i);
};

function usePagination(props: UsePaginationProps) {
  const { boundaries = 1, page, rowsPerPage = 10, siblings = 1, totalRowCount = 1 } = props;

  const pageCount = Math.ceil(totalRowCount / rowsPerPage);

  const pages = React.useMemo((): PageType[] => {
    const startRange = range(1, Math.min(boundaries, pageCount));
    const endRange = range(Math.max(pageCount - boundaries + 1, boundaries + 1), pageCount);

    const startIndex = Math.max(
      Math.min(Number(page) - siblings, pageCount - boundaries - siblings * 2 - 1),
      boundaries + 2,
    );
    const endIndex = Math.min(
      Math.max(Number(page) + siblings, boundaries + siblings * 2 + 2),
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
  }, [page, boundaries, pageCount, siblings]);

  return [pages, pageCount] as [PageType[], number];
}

export { Pagination, usePagination };
export type { PaginationProps, UsePaginationProps };
