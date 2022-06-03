import * as React from 'react';
import {
  StyledCheckbox,
  StyledCheckboxLabel,
  StyledCheckboxIndicator,
  StyledCheckboxText,
} from './Checkbox.styles';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { ManifestProps } from '../../types';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

export interface CheckboxProps
  extends ManifestProps,
    React.ComponentPropsWithoutRef<typeof StyledCheckbox> {}

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => {
    const {
      as,
      checked,
      children,
      className,
      css,
      defaultChecked,
      disabled,
      onCheckedChange,
      ...other
    } = props;

    const [isChecked, setIsChecked] = useControllableState({
      prop: checked,
      defaultProp: defaultChecked,
      onChange: onCheckedChange,
    });

    return (
      <StyledCheckboxLabel
        as={as}
        className="manifest-checkbox-label"
        css={css}
        isDisabled={disabled}
      >
        <StyledCheckbox
          {...other}
          className={cx('manifest-checkbox', className)}
          checked={isChecked}
          disabled={disabled}
          onCheckedChange={setIsChecked}
          ref={forwardedRef}
        >
          <StyledCheckboxIndicator>
            <Icon
              className="manifest-checkbox-icon"
              icon={isChecked === 'indeterminate' ? 'remove' : 'check'}
            />
          </StyledCheckboxIndicator>
        </StyledCheckbox>
        {children && (
          <StyledCheckboxText className="manifest-checkbox-text">{children}</StyledCheckboxText>
        )}
      </StyledCheckboxLabel>
    );
  },
);
