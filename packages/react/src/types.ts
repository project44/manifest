import type { CSSProperties } from 'react';
import { CalendarDate } from '@internationalized/date';
import { CSS } from './styles';
import { RangeValue } from './components/CalendarRange';

// Many of these interfaces are clones of react-aria types.
// Cherry-picking the ones we use most often.

export interface DOMProps {
  /** The element's unique identifier */
  id?: string;
}

export interface StyleProps {
  /** Class name attached to the root element. */
  className?: string;
  /** Theme aware style object. */
  css?: CSS;
  /** Pure css styles */
  style?: CSSProperties;
}

export interface DefinedRange {
  key: string;
  label: string;
  value: RangeValue<CalendarDate>;
}

export interface DefaultRanges {
  today: { label: string; key: string };
  yesterday: { label: string; key: string };
  thisWeek: { label: string; key: string };
  lastWeek: { label: string; key: string };
  thisMonth: { label: string; key: string };
  lastMonth: { label: string; key: string };
}
