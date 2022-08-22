import type { RangeCalendarState } from '@react-stately/calendar';
import * as React from 'react';
import { cx } from '../../../styles';
import { useStyles } from './CalendarSidebar.styles';
import { ListBox, ListBoxItem } from '../../ListBox';
import { DefinedRange } from '../../../types';

interface CalendarSideBarProps {
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

function CalendarSidebar(props: CalendarSideBarProps) {
  const { state, ranges } = props;
  const { className } = useStyles();

  const findRangeByKey = (eventTarget: HTMLDivElement): DefinedRange | undefined => {
    return ranges.find(item => item.key === eventTarget.id);
  };

  const previewChange = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const selectedRange = findRangeByKey(ev.target as HTMLDivElement);

    if (selectedRange) {
      const { rangeAnchor } = selectedRange;
      state.setFocusedDate(rangeAnchor.start);
      state.setAnchorDate(rangeAnchor.end);
    }
  };

  const handleRangeChange = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const selectedRange = findRangeByKey(ev.target as HTMLDivElement);

    if (selectedRange) {
      const { rangeAnchor } = selectedRange;
      state.setValue({
        start: rangeAnchor.start,
        end: rangeAnchor.end,
      });
    }
  };

  return (
    <div className={cx(className, 'manifest-calendar-sidebar')}>
      <ListBox aria-label={'listbox'}>
        {ranges.map(item => {
          return (
            <ListBoxItem aria-label={item.label} key={item.key}>
              <div
                role="option"
                aria-selected={false}
                aria-disabled="false"
                aria-label={item.key}
                aria-hidden="true"
                id={item.key}
                onMouseEnter={previewChange}
                onClick={handleRangeChange}
                className="manifest-calendar-header__text"
              >
                {item.label}
              </div>
            </ListBoxItem>
          );
        })}
      </ListBox>
    </div>
  );
}

export { CalendarSidebar };
