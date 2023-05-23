import { useDateFormatter, useLocale } from '@react-aria/i18n';
import type { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import type { AriaButtonProps } from '@react-types/button';
import { cx } from '@project44-manifest/react-styles';
import { IconButton } from '../button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { useStyles } from './CalendarHeader.styles';

export interface CalendarHeaderProps {
  /**
   * Props passed to the next button
   */
  nextButtonProps: AriaButtonProps;
  /**
   * Props passed to the previous button.
   */
  prevButtonProps: AriaButtonProps;
  /**
   * The calendar state.
   */
  state: CalendarState | RangeCalendarState;
}

/* @private */
export function CalendarHeader(props: CalendarHeaderProps) {
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

  return (
    <div className={cx(className, 'manifest-calendar-header')}>
      <IconButton
        {...prevButtonProps}
        className="manifest-calendar-header__previous-button"
        size="small"
        variant="tertiary"
      >
        <Icon icon={direction === 'rtl' ? 'chevron_right' : 'chevron_left'} />
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
        <Icon icon={direction === 'rtl' ? 'chevron_left' : 'chevron_right'} />
      </IconButton>
    </div>
  );
}
