import * as React from 'react';
import { StyledSelectOption } from './Select.styles';

type SelectOptionElement = React.ElementRef<typeof StyledSelectOption>;
type SelectOptionNativeProps = React.ComponentPropsWithRef<typeof StyledSelectOption>;

export type SelectOptionProps = SelectOptionNativeProps;

export const SelectOption = React.forwardRef<SelectOptionElement, SelectOptionProps>(
  (props, forwardedRef) => <StyledSelectOption {...props} ref={forwardedRef} />,
);
