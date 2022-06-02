import type { AriaCheckboxProps } from '@react-types/checkbox';
import * as React from 'react';
import {
  StyledCheckboxContainer,
  StyledCheckboxLabel,
  StyledCheckboxText,
} from './Checkbox.styles';
import { useCheckbox, useCheckboxGroupItem } from '@react-aria/checkbox';
import { cx } from '../../styles';
import { Icon } from '../Icon';
import { ManifestProps } from '../../types';
import { mergeProps } from '@react-aria/utils';
import { useCheckboxGroup } from './Checkbox.context';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '../VisuallyHidden';

export interface CheckboxProps extends ManifestProps, AriaCheckboxProps {}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>((props, forwardedRef) => {
  const {
    as,
    autoFocus,
    children,
    className: classNameProp,
    css,
    isDisabled,
    isIndeterminate,
    value,
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const group = useCheckboxGroup();
  const { inputProps } = group
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem({ ...props, value: value ?? '' }, group, inputRef)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(props, useToggleState(props), inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });

  const isChecked = inputProps.checked;

  const className = cx(
    'manifest-checkbox-label',
    {
      'manifest-checkbox__disabled': isDisabled,
      'manifest-checkbox__hovered': isHovered,
      'manifest-checkbox__mixed': isIndeterminate && isChecked,
      'manifest-checkbox__checked': isChecked,
      'manifest-checkbox__unchecked': !isChecked,
    },
    classNameProp,
  );

  return (
    <StyledCheckboxLabel
      {...hoverProps}
      as={as}
      className={className}
      css={css}
      isDisabled={isDisabled}
      ref={forwardedRef}
    >
      <StyledCheckboxContainer
        className="manifest-checkbox-container"
        isChecked={isChecked}
        isDisabled={isDisabled}
        isFocusVisible={isFocusVisible}
        isHovered={isHovered}
        {...focusProps}
      >
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            className="manifest-checkbox-input"
            ref={inputRef}
          />
        </VisuallyHidden>
        {isIndeterminate && isChecked && <Icon icon="remove" />}
        {!isIndeterminate && isChecked && <Icon icon="check" />}
      </StyledCheckboxContainer>
      {children && (
        <StyledCheckboxText className="manifest-checkbox-text">{children}</StyledCheckboxText>
      )}
    </StyledCheckboxLabel>
  );
});
