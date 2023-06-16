import {
  CalendarDate,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from '@internationalized/date';
import { DefinedRange } from './CalendarRanges';

export const createCalendarDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return new CalendarDate(year, month, day);
};

export const addDays = (calendarDate: CalendarDate, days: number) => {
  const { day, month, year } = calendarDate;
  const date = new Date(year, month, day);
  date.setDate(date.getDate() + days);
  return calendarDate.set({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });
};

export const addMonths = (calendarDate: CalendarDate, months: number) => {
  const { day, month, year } = calendarDate;
  const date = new Date(year, month, day);
  date.setMonth(date.getMonth() + months);
  return calendarDate.set({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  });
};

const defaultDate = new Date();
const calendarDate = createCalendarDate(defaultDate);

export const defineds = {
  startOfToday: calendarDate,
  endOfToday: calendarDate,
  startOfYesterday: addDays(calendarDate, -1),
  endOfYesterday: addDays(calendarDate, -1),
  sevenDaysAgo: addDays(calendarDate, -7),
  thirtyDaysAgo: addDays(calendarDate, -30),
  endOfWeek: endOfWeek(calendarDate, 'en-US'),
  startOfLastWeek: startOfWeek(addDays(calendarDate, -7), 'en-US'),
  endOfLastWeek: endOfWeek(addDays(calendarDate, -7), 'en-US'),
  startOfMonth: startOfMonth(calendarDate),
  endOfMonth: endOfMonth(calendarDate),
  startOfLastMonth: startOfMonth(addMonths(calendarDate, -1)),
  endOfLastMonth: endOfMonth(addMonths(calendarDate, -1)),
};

export const getDefaultRanges = (): DefinedRange[] => [
  {
    key: 'today',
    label: 'Today',
    value: {
      start: defineds.startOfToday,
      end: defineds.startOfToday,
    },
  },
  {
    key: 'yesterday',
    label: 'Yesterday',
    value: {
      start: defineds.startOfYesterday,
      end: defineds.endOfYesterday,
    },
  },
  {
    key: 'last7Days',
    label: 'Last 7 days',
    value: {
      start: defineds.sevenDaysAgo,
      end: defineds.endOfToday,
    },
  },
  {
    key: 'last30Days',
    label: 'Last 30 days',
    value: {
      start: defineds.thirtyDaysAgo,
      end: defineds.endOfToday,
    },
  },
  {
    key: 'thisMonth',
    label: 'This Month',
    value: {
      start: defineds.startOfMonth,
      end: defineds.endOfMonth,
    },
  },
  {
    key: 'lastMonth',
    label: 'Last Month',
    value: {
      start: defineds.startOfLastMonth,
      end: defineds.endOfLastMonth,
    },
  },
];
