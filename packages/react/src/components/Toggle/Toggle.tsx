import type { AriaSwitchProps } from '@react-types/switch';
import * as React from 'react';
import { StyledToggleContainer, StyledToggleLabel, StyledToggleText } from './Toggle.styles';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '../VisuallyHidden';

export interface ToggleProps extends ManifestProps, AriaSwitchProps {}

export const Toggle = React.forwardRef<HTMLLabelElement, ToggleProps>((props, forwardedRef) => {
  const { as, autoFocus, children, className: classNameProp, css, isDisabled } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);

  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { inputProps } = useSwitch(props, state, inputRef);

  const isChecked = inputProps.checked;

  const className = cx(
    'manifest-toggle-label',
    {
      'manifest-toggle__disabled': isDisabled,
      'manifest-toggle__checked': isChecked,
      'manifest-toggle__unchecked': !isChecked,
    },
    classNameProp,
  );

  return (
    <StyledToggleLabel {...hoverProps} as={as} className={className} css={css} ref={forwardedRef}>
      <StyledToggleContainer
        className="manifest-toggle-container"
        isChecked={isChecked}
        isDisabled={isDisabled}
        isFocusVisible={isFocusVisible}
        isHovered={isHovered}
        {...focusProps}
      >
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            className="manifest-toggle-input"
            ref={inputRef}
          />
        </VisuallyHidden>
      </StyledToggleContainer>
      {children && <StyledToggleText className="manifest-toggle-text">{children}</StyledToggleText>}
    </StyledToggleLabel>
  );
});
