import { CalendarDate } from '@internationalized/date';
import { DefinedRange } from '../../../types';
import { defaultDateRanges } from '../../../constants';
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

export const defaultDate = new Date();
export const defineds = {
  startOfWeek: startOfWeek(defaultDate),
  endOfWeek: endOfWeek(defaultDate),
  startOfLastWeek: startOfWeek(addDays(defaultDate, -7)),
  endOfLastWeek: endOfWeek(addDays(defaultDate, -7)),
  startOfToday: startOfDay(defaultDate),
  endOfToday: endOfDay(defaultDate),
  startOfYesterday: startOfDay(addDays(defaultDate, -1)),
  endOfYesterday: endOfDay(addDays(defaultDate, -1)),
  startOfMonth: startOfMonth(defaultDate),
  endOfMonth: endOfMonth(defaultDate),
  startOfLastMonth: startOfMonth(addMonths(defaultDate, -1)),
  endOfLastMonth: endOfMonth(addMonths(defaultDate, -1)),
};
export const createCalendarDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return new CalendarDate(year, month, day);
};
export const getDefaultRanges = (): DefinedRange[] => {
  const { today, yesterday, thisWeek, lastWeek, thisMonth, lastMonth } = defaultDateRanges;
  return [
    {
      key: today.key,
      label: today.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfToday),
        end: createCalendarDate(defineds.startOfToday),
      },
    },
    {
      key: yesterday.key,
      label: yesterday.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfYesterday),
        end: createCalendarDate(defineds.endOfYesterday),
      },
    },
    {
      key: thisWeek.key,
      label: thisWeek.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfWeek),
        end: createCalendarDate(defineds.endOfWeek),
      },
    },
    {
      key: lastWeek.key,
      label: lastWeek.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfLastWeek),
        end: createCalendarDate(defineds.endOfLastWeek),
      },
    },
    {
      key: thisMonth.key,
      label: thisMonth.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfMonth),
        end: createCalendarDate(defineds.endOfMonth),
      },
    },
    {
      key: lastMonth.key,
      label: lastMonth.label,
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfLastMonth),
        end: createCalendarDate(defineds.endOfLastMonth),
      },
    },
  ];
};
