import * as React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useHover, usePress } from '@react-aria/interactions';
import { useRadio } from '@react-aria/radio';
import { mergeProps } from '@react-aria/utils';
import type { FocusableProps } from '@react-types/shared';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { useSegmentedControl } from '../../SegmentedControl.context';
import { StyledSegment } from './Segment.styles';

export interface SegmentProps extends FocusableProps {
  /** Theme aware style object */
  css?: CSS;
  /** Element added after the segment text. */
  endAdornment?: React.ReactElement;
  /** The rendered label of the segment. */
  label: string;
  /** Element added before the segment text. */
  startAdornment?: React.ReactElement;
  /**  The value of the segment item */
  value: string;
}

export const Segment = React.forwardRef((props, forwardedRef) => {
  const {
    as,
    autoFocus,
    className: classNameProp,
    css,
    label,
    endAdornment,
    startAdornment,
    value,
    ...other
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useSegmentedControl();

  const { inputProps } = useRadio(props, state, inputRef);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
  const { isHovered, hoverProps } = useHover({});
  const { pressProps, isPressed } = usePress({});
  const isSelected = state.selectedValue === value;

  const className = cx(
    'manifest-segment',
    {
      'manifest-segment--active': isPressed,
      'manifest-segment--hover': isHovered,
      'manifest-segment--focus-visible': isFocusVisible,
      'manifest-segment--selected': isSelected,
    },
    classNameProp,
  );

  return (
    <StyledSegment
      {...mergeProps(hoverProps, pressProps, other)}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>
      {startAdornment && <div className="manifest-segment__start-adornment">{startAdornment}</div>}
      <div className="manifest-segment__text">{label}</div>
      {endAdornment && <div className="manifest-segment__end-adornment">{endAdornment}</div>}
    </StyledSegment>
  );
}) as ForwardRefComponent<'input', SegmentProps>;

Segment.displayName = 'Segment';
