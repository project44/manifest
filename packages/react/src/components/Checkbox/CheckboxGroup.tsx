import type { AriaCheckboxGroupProps } from '@react-types/checkbox';
import * as React from 'react';
import { CSS, cx } from '../../styles';
import { CheckboxGroupContext } from './Checkbox.context';
import { StyledCheckboxGroup } from './Checkbox.styles';
import { useCheckboxGroup } from '@react-aria/checkbox';
import { useCheckboxGroupState } from '@react-stately/checkbox';

export interface CheckboxGroupOptions extends AriaCheckboxGroupProps {
  /**
   * Rendered element of the component.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Styles applied to the checkbox group.
   */
  css?: CSS;
}

export interface CheckboxGroupProps
  extends CheckboxGroupOptions,
    Omit<React.HTMLAttributes<unknown>, keyof CheckboxGroupOptions> {}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, forwardedRef) => {
    const { as, children, className: classNameProp, css, ...other } = props;

    const className = cx('manifest-checkbox-group', classNameProp);

    const groupState = useCheckboxGroupState(other as AriaCheckboxGroupProps);
    const { groupProps } = useCheckboxGroup(other as AriaCheckboxGroupProps, groupState);

    return (
      <StyledCheckboxGroup
        {...groupProps}
        as={as}
        className={className}
        css={css}
        ref={forwardedRef}
        role="presentation"
      >
        <CheckboxGroupContext.Provider value={groupState}>{children}</CheckboxGroupContext.Provider>
      </StyledCheckboxGroup>
    );
  },
);
