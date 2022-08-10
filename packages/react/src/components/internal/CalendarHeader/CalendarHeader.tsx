import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import * as React from 'react';
import { IconButton, IconButtonProps } from '../../IconButton';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { cx } from '../../../styles';
import { Icon } from '../../Icon';
import { Typography } from '../../Typography';
import { useStyles } from './CalendarHeader.styles';

interface CalendarHeaderProps {
  /**
   * Props passed to the next button
   */
  nextButtonProps: IconButtonProps;
  /**
   * Props passed to the previous button.
   */
  prevButtonProps: IconButtonProps;
  /**
   * The calendar state.
   */
  state: CalendarState | RangeCalendarState;
}

function CalendarHeader(props: CalendarHeaderProps) {
  const { nextButtonProps, prevButtonProps, state } = props;

  const { direction } = useLocale();
  const currentMonth = state.visibleRange.start;
  const dateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era:
      currentMonth.calendar.identifier === 'gregory' && currentMonth.era === 'BC'
        ? 'short'
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
  });

  const { className } = useStyles();

  console.log(prevButtonProps);

  return (
    <div className={cx(className, 'manifest-calendar-header')}>
      <IconButton
        {...prevButtonProps}
        className="manifest-calendar-header__previous-button"
        size="small"
        variant="tertiary"
      >
        <Icon icon={direction === 'rtl' ? 'arrow_right' : 'arrow_left'} />
      </IconButton>
      <Typography className="manifest-calendar-header__text" variant="subtext">
        {dateFormatter.format(state.visibleRange.start.toDate(state.timeZone))}
      </Typography>
      <IconButton
        {...nextButtonProps}
        className="manifest-calendar-header__next-button"
        size="small"
        variant="tertiary"
      >
        <Icon icon={direction === 'rtl' ? 'arrow_left' : 'arrow_right'} />
      </IconButton>
    </div>
  );
}

export { CalendarHeader };
