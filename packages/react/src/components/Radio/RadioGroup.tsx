import type { AriaRadioGroupProps } from '@react-types/radio';
import * as React from 'react';
import { CSS, cx } from '../../styles';
import { RadioGroupContext } from './Radio.context';
import { StyledRadioGroup } from './Radio.styles';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';

export interface RadioGroupProps extends AriaRadioGroupProps {
  /**
   * Rendered element of the component.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Radio children elements.
   */
  children: React.ReactNode;
  /**
   * Classname applied to the root element.
   */
  className?: string;
  /**
   * Styles applied to the radio group.
   */
  css?: CSS;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, forwardedRef) => {
    const {
      as,
      children,
      className: classNameProp,
      css,
      orientation = 'vertical',
      ...other
    } = props;

    const state = useRadioGroupState(other);
    const { radioGroupProps } = useRadioGroup(other, state);

    const className = cx(
      'manifest-radio-group',
      {
        [`manifest-radio-group__${orientation}`]: orientation,
      },
      classNameProp,
    );

    return (
      <RadioGroupContext.Provider value={{ state }}>
        <StyledRadioGroup
          {...radioGroupProps}
          as={as}
          className={className}
          css={css}
          orientation={orientation}
          ref={forwardedRef}
        >
          {children}
        </StyledRadioGroup>
      </RadioGroupContext.Provider>
    );
  },
);
