import type { DateFieldState, DateSegment as AriaDateSegment } from '@react-stately/datepicker';
import type { ManifestProps } from '../../../types';
import * as React from 'react';
import { cx } from '../../../styles';
import { mergeRefs } from '@react-aria/utils';
import { StyledDateSegment } from './DateSegment.styles';
import { useDateSegment } from '@react-aria/datepicker';

type DateSegmentElement = React.ElementRef<typeof StyledDateSegment>;
type DateSegmentNativeProps = React.ComponentPropsWithoutRef<typeof StyledDateSegment>;

export interface DateSegmentProps extends ManifestProps, DateSegmentNativeProps {
  segment: AriaDateSegment;
  state: DateFieldState;
}

export const DateSegment = React.forwardRef<DateSegmentElement, DateSegmentProps>(
  (props, forwardedRef) => {
    const { as, className, css, segment, state } = props;

    const segmentRef = React.useRef<HTMLDivElement>(null);
    const { segmentProps } = useDateSegment(segment, state, segmentRef);

    return (
      <StyledDateSegment
        {...segmentProps}
        as={as}
        className={cx('manifest-date--segment', className)}
        css={{
          ...css,
          ...(segment.maxValue != null && {
            minWidth: `${String(String(segment.maxValue).length)}ch`,
          }),
        }}
        ref={mergeRefs(segmentRef, forwardedRef)}
      >
        {segment.text}
      </StyledDateSegment>
    );
  },
);
