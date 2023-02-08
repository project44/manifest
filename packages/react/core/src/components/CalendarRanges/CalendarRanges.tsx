import * as React from 'react';
// Will be fixed when this is moved into its own package
// eslint-disable-next-line import/no-unresolved
import { Selection } from '@react-types/shared';
import { CalendarDate } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { RangeValue } from '../CalendarRange';
import { ListBox } from '../ListBox';
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
  const { onRangeChange, ranges = getDefaultRanges() } = props;
  const { className } = useStyles();

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
        aria-label="listbox"
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
