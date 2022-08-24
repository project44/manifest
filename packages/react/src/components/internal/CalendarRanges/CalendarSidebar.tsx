import type { RangeCalendarState } from '@react-stately/calendar';
import * as React from 'react';
import { cx } from '../../../styles';
import { useStyles } from './CalendarSidebar.styles';
import { ListBox, ListBoxItem } from '../../ListBox';
import { DefinedRange } from '../../../types';
import { Selection } from '@react-types/shared';

interface CalendarRangesProps {
  /**
   * The calendar state.
   */
  state: RangeCalendarState;

  /**
   *  The ranges provided
   */
  ranges: DefinedRange[];

  onChange?: () => void;
}

function CalendarRanges(props: CalendarRangesProps) {
  const { state, ranges } = props;
  const { className } = useStyles();

  const findRangeByKey = (key: React.Key): DefinedRange | undefined => {
    return ranges.find(item => item.key === key.toString());
  };

  const handleRangeChange = (key: Selection): void => {
    const [first] = key;
    const selectedRange = findRangeByKey(first);
    if (selectedRange) {
      const { value } = selectedRange;
      state.setValue({
        start: value.start,
        end: value.end,
      });
    }
  };

  return (
    <div className={cx(className, 'manifest-calendar-sidebar')}>
      <ListBox onSelectionChange={handleRangeChange} selectionMode="single" aria-label={'listbox'}>
        {ranges.map(item => {
          return (
            <ListBoxItem aria-label={item.label} key={item.key}>
              {item.label}
            </ListBoxItem>
          );
        })}
      </ListBox>
    </div>
  );
}

export { CalendarRanges };
