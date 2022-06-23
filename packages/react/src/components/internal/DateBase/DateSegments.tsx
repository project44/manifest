import type { AriaDatePickerProps, DateValue } from '@react-types/datepicker';
import type { ManifestProps } from '../../../types';
import * as React from 'react';
import { createCalendar } from '@internationalized/date';
import { cx } from '../../../styles';
import { DateSegment } from './DateSegment';
import { Flex } from '../../Flex';
import { mergeRefs } from '@react-aria/utils';
import { useDateField } from '@react-aria/datepicker';
import { useDateFieldState } from '@react-stately/datepicker';
import { useLocale } from '@react-aria/i18n';

type DateSegmentsAriaProps = AriaDatePickerProps<DateValue>;
type DateSegmentsElement = React.ElementRef<typeof Flex>;

export interface DateSegmentsProps extends ManifestProps, DateSegmentsAriaProps {}

export const DateSegments = React.forwardRef<DateSegmentsElement, DateSegmentsProps>(
  (props, forwardedRef) => {
    const { as, className, css } = props;

    const fieldRef = React.useRef<HTMLDivElement>(null);

    const { locale } = useLocale();
    const state = useDateFieldState({ ...props, locale, createCalendar });
    const { fieldProps } = useDateField(props, state, fieldRef);

    return (
      <Flex
        {...fieldProps}
        align="center"
        as={as}
        className={cx('manifest-text-field--input', className)}
        css={css}
        ref={mergeRefs(fieldRef, forwardedRef)}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </Flex>
    );
  },
);
