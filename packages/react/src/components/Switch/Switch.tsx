import type { AriaSwitchProps } from '@react-types/switch';
import type { ManifestProps } from '../../types';
import * as React from 'react';
import {
  StyledSwitch,
  StyledSwitchIndicator,
  StyledSwitchLabel,
  StyledSwitchText,
} from './Switch.styles';
import { cx, VariantProps } from '../../styles';
import { mergeProps } from '@react-aria/utils';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useSwitch } from '@react-aria/switch';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '../VisuallyHidden';

type SwitchElement = React.ElementRef<typeof StyledSwitchLabel>;
type SwitchNativeProps = Omit<
  React.ComponentPropsWithoutRef<typeof StyledSwitchLabel>,
  keyof AriaSwitchProps
>;
type SwitchVariantProps = Omit<VariantProps<typeof StyledSwitchLabel>, keyof AriaSwitchProps>;

export interface SwitchProps
  extends ManifestProps,
    SwitchNativeProps,
    SwitchVariantProps,
    AriaSwitchProps {}

export const Switch = React.forwardRef<SwitchElement, SwitchProps>((props, forwardedRef) => {
  const { as, autoFocus, children, className, css, isDisabled, ...other } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const state = useToggleState(props);
  const { inputProps } = useSwitch({ ...other, autoFocus, children, isDisabled }, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  return (
    <StyledSwitchLabel
      {...hoverProps}
      as={as}
      className="manifest-switch-label"
      css={css}
      isDisabled={isDisabled}
      ref={forwardedRef}
    >
      <StyledSwitch
        {...focusProps}
        className={cx('manifest-switch', className)}
        isChecked={state.isSelected}
        isHovered={isHovered}
        isFocusVisible={isFocusVisible}
      >
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            className="manifest-switch-input"
            ref={inputRef}
          />
        </VisuallyHidden>
        <StyledSwitchIndicator isChecked={state.isSelected} />
      </StyledSwitch>
      {children && (
        <StyledSwitchText className="manifest-switch-text" variant="subtext">
          {children}
        </StyledSwitchText>
      )}
    </StyledSwitchLabel>
  );
});
