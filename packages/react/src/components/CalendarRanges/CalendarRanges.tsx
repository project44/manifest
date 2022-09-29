import { CalendarDate } from '@internationalized/date';
import { cx } from '@project44-manifest/react-styles';
import { getDefaultRanges } from './defaultDefinedRanges';
import { ListBox } from '../ListBox';
import { ListBoxItem } from '../ListBoxItem';
import { RangeValue } from '../CalendarRange';
import { Selection } from '@react-types/shared';
import { useStyles } from './CalendarRanges.styles';

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
	 * function to hable the change on Ranges
	 */
	onRangeChange?: (key: Selection, ranges: DefinedRange[]) => void;
}

/* @private */
export function CalendarRanges(props: CalendarRangesProps) {
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
				{ranges.map((item) => {
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
