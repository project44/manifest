import type { AriaRadioProps } from '@react-types/radio';
import * as React from 'react';
import { StyledRadioContainer, StyledRadioLabel, StyledRadioText } from './Radio.styles';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';
import { mergeProps } from '@react-aria/utils';
import { RadioGroupContext, useRadioGroup } from './Radio.context';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useRadio } from '@react-aria/radio';
import { VisuallyHidden } from '../VisuallyHidden';

export interface RadioProps extends ManifestProps, AriaRadioProps {}

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, forwardedRef) => {
  const { as, autoFocus, children, className: classNameProp, css, isDisabled } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const { state } = useRadioGroup() as RadioGroupContext;
  const { inputProps } = useRadio(props, state, inputRef);
  const { focusProps, isFocusVisible } = useFocusRing({ autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const isChecked = inputProps.checked;

  const className = cx(
    'manifest-radio-label',
    {
      'manifest-radio': isDisabled,
      'manifest-radio__checked': isChecked,
      'manifest-radio__unchecked': !isChecked,
    },
    classNameProp,
  );

  return (
    <StyledRadioLabel
      {...hoverProps}
      as={as}
      className={className}
      css={css}
      isDisabled={isDisabled}
      ref={forwardedRef}
    >
      <StyledRadioContainer
        className="manifest-radio-container"
        isChecked={isChecked}
        isDisabled={isDisabled}
        isFocusVisible={isFocusVisible}
        isHovered={isHovered}
        {...focusProps}
      >
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            className="manifest-radio-input"
            ref={inputRef}
          />
        </VisuallyHidden>
      </StyledRadioContainer>
      {children && <StyledRadioText className="manifest-radio-text">{children}</StyledRadioText>}
    </StyledRadioLabel>
  );
});
