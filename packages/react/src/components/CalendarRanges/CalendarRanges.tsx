import * as React from 'react';
// Will be fixed when this is moved into its own package
// eslint-disable-next-line import/no-unresolved
import { Selection } from '@react-types/shared';
import { CalendarDate } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { RangeValue } from '../CalendarRange';
import { ListBox, ListBoxProps } from '../ListBox';
import { ListBoxItem } from '../ListBoxItem';
import { useStyles } from './CalendarRanges.styles';
import { getDefaultRanges } from './defaultDefinedRanges';

export interface DefinedRange {
  key: string;
  label: string;
  value: RangeValue<CalendarDate>;
}

export interface CalendarRangesProps {
  /**
   * Props passed to the listbox component
   */
  listBoxProps?: ListBoxProps;
  /**
   *  The ranges provided
   */
  ranges?: DefinedRange[];
  /**
   * function to handle the change on Ranges
   */
  onRangeChange?: (key: Selection, ranges: DefinedRange[]) => void;
}

/* @private */
export function CalendarRanges(props: CalendarRangesProps) {
  const { listBoxProps = {}, onRangeChange, ranges = getDefaultRanges() } = props;
  const { className } = useStyles();

  const ariaLabel = (listBoxProps as ListBoxProps)?.['aria-label'] || 'listbox';

  const handleSelectionChange = React.useCallback(
    (key: Selection) => {
      if (onRangeChange) {
        onRangeChange(key, ranges);
      }
    },
    [onRangeChange, ranges],
  );

  return (
    <div className={cx(className, 'manifest-calendar-ranges')}>
      <ListBox
        {...listBoxProps}
        aria-label={ariaLabel}
        selectionMode="single"
        onSelectionChange={handleSelectionChange}
      >
        {ranges.map((item) => (
          <ListBoxItem key={item.key} aria-label={item.label}>
            {item.label}
          </ListBoxItem>
        ))}
      </ListBox>
    </div>
  );
}
