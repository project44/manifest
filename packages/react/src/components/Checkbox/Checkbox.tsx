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
import { mergeProps } from '../../utils';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useFocusRing } from '@react-aria/focus';

export interface CheckboxProps extends ManifestProps, React.ComponentProps<typeof StyledCheckbox> {}

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => {
    const {
      as,
      autoFocus,
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

    const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

    return (
      <StyledCheckboxLabel
        as={as}
        className="manifest-checkbox-label"
        css={css}
        isDisabled={disabled}
      >
        <StyledCheckbox
          {...mergeProps(focusProps, other)}
          className={cx('manifest-checkbox', className)}
          checked={isChecked}
          disabled={disabled}
          isFocusVisible={isFocusVisible}
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
