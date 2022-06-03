import * as React from 'react';
import {
  StyledToggle,
  StyledToggleIndicator,
  StyledToggleLabel,
  StyledToggleText,
} from './Toggle.styles';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';

export interface ToggleProps extends ManifestProps, React.ComponentProps<typeof StyledToggle> {}

export const Toggle = React.forwardRef<React.ElementRef<typeof StyledToggle>, ToggleProps>(
  (props, forwardedRef) => {
    const { as, children, className, css, disabled, ...other } = props;

    return (
      <StyledToggleLabel
        as={as}
        className={cx('manifest-toggle-label', className)}
        css={css}
        isDisabled={disabled}
      >
        <StyledToggle {...other} className="manifest-toggle" ref={forwardedRef}>
          <StyledToggleIndicator />
        </StyledToggle>
        {children && (
          <StyledToggleText className="manifest-toggle-text">{children}</StyledToggleText>
        )}
      </StyledToggleLabel>
    );
  },
);
