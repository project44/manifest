import type { RangeCalendarState } from '@react-stately/calendar';
import * as React from 'react';
import { cx } from '../../../styles';
import { useStyles } from './CalendarRanges.styles';
import { ListBox, ListBoxItem } from '../../ListBox';
import { Selection } from '@react-types/shared';
import { RangeValue } from '../../CalendarRange';
import { CalendarDate } from '@internationalized/date';
import { getDefaultRanges } from './defaultDefinedRanges';

interface DefinedRange {
  key: string;
  label: string;
  value: RangeValue<CalendarDate>;
}
interface CalendarRangesProps {
  /**
   *  The ranges provided
   */
  ranges?: DefinedRange[];

  /**
   * function to hable the change on Ranges
   */
  onRangeChange?: (key: Selection, ranges: DefinedRange[]) => void;
}

function CalendarRanges(props: CalendarRangesProps) {
  const { onRangeChange, ranges = getDefaultRanges() } = props;
  const { className } = useStyles();
  const selectionChange = (key: Selection) => {
    if (onRangeChange) {
      onRangeChange(key, ranges);
    }
    return;
  };

  return (
    <div className={cx(className, 'manifest-calendar-ranges')}>
      <ListBox onSelectionChange={selectionChange} selectionMode="single" aria-label={'listbox'}>
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
export type { DefinedRange };
