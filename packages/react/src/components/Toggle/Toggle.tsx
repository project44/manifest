import * as React from 'react';
import {
  StyledToggle,
  StyledToggleIndicator,
  StyledToggleLabel,
  StyledToggleText,
} from './Toggle.styles';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '../../utils';
import { useFocusRing } from '@react-aria/focus';

export interface ToggleProps extends ManifestProps, React.ComponentProps<typeof StyledToggle> {}

export const Toggle = React.forwardRef<React.ElementRef<typeof StyledToggle>, ToggleProps>(
  (props, forwardedRef) => {
    const { as, autoFocus, children, className, css, disabled, ...other } = props;

    const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

    return (
      <StyledToggleLabel
        as={as}
        className={cx('manifest-toggle-label', className)}
        css={css}
        isDisabled={disabled}
      >
        <StyledToggle
          {...mergeProps(focusProps, other)}
          className="manifest-toggle"
          isFocusVisible={isFocusVisible}
          ref={forwardedRef}
        >
          <StyledToggleIndicator />
        </StyledToggle>
        {children && (
          <StyledToggleText className="manifest-toggle-text">{children}</StyledToggleText>
        )}
      </StyledToggleLabel>
    );
  },
);
