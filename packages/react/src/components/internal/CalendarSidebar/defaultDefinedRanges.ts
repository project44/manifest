import { CalendarDate } from '@internationalized/date';
import { DefinedRange } from '../../../types';
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

const defaultDate = new Date();
const defineds = {
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
const createCalendarDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return new CalendarDate(year, month, day);
};
export const getDefaultRanges = (): DefinedRange[] => {
  return [
    {
      key: 'today',
      label: 'Today',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfToday),
        end: createCalendarDate(defineds.startOfToday),
      },
    },
    {
      key: 'yesterday',
      label: 'Yesterday',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfYesterday),
        end: createCalendarDate(defineds.endOfYesterday),
      },
    },
    {
      key: 'thisWeek',
      label: 'This week',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfWeek),
        end: createCalendarDate(defineds.endOfWeek),
      },
    },
    {
      key: 'lastWeek',
      label: 'Last week',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfLastWeek),
        end: createCalendarDate(defineds.endOfLastWeek),
      },
    },
    {
      key: 'thisMonth',
      label: 'This month',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfMonth),
        end: createCalendarDate(defineds.endOfMonth),
      },
    },
    {
      key: 'lastMonth',
      label: 'Last month',
      rangeAnchor: {
        start: createCalendarDate(defineds.startOfLastMonth),
        end: createCalendarDate(defineds.endOfLastMonth),
      },
    },
  ];
};
