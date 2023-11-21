import * as React from 'react';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { SegmentedControlProvider } from './SegmentedControl.context';
import { StyledSegmentedControl } from './SegmentedControl.styles';

export interface SegmentedControlProps {
  /** Theme aware style object */
  css?: CSS;
  /** The current value (controlled). */
  value?: string;
  /** The default value (uncontrolled). */
  defaultValue?: string;
  /** Handler that is called when the value changes. */
  onChange?: (value: string) => void;
}

export const SegmentedControl = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css } = props;

  const state = useRadioGroupState(props);

  const { radioGroupProps } = useRadioGroup(props, state);

  const className = cx('manifest-segmented-control', classNameProp);

  return (
    <SegmentedControlProvider value={state}>
      <StyledSegmentedControl
        ref={forwardedRef}
        as={as}
        className={className}
        css={css}
        {...radioGroupProps}
      >
        {children}
      </StyledSegmentedControl>
    </SegmentedControlProvider>
  );
}) as ForwardRefComponent<'div', SegmentedControlProps>;

SegmentedControl.displayName = 'SegmentedControl';
