import * as React from 'react';
import { ButtonGroupContext } from './ButtonGroup.context';
import { StyledButtonGroup } from './Button.styles';

export interface ButtonGroupProps extends React.ComponentPropsWithoutRef<typeof StyledButtonGroup> {
  /**
   * Whether the buttons in the button group are all disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The group variant
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props: ButtonGroupProps, forwardedRef) => {
    const { children, isDisabled, isAttached, variant, ...other } = props;

    return (
      <StyledButtonGroup isAttached={isAttached} ref={forwardedRef} {...other}>
        <ButtonGroupContext.Provider value={{ isDisabled, variant }}>
          {children}
        </ButtonGroupContext.Provider>
      </StyledButtonGroup>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
