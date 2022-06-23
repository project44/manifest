import * as React from 'react';
import { ListBoxBase, ListBoxBaseProps } from '../internal';
import { useListState } from '@react-stately/list';

type ListBoxElement = React.ElementRef<typeof ListBoxBase>;

export type ListBoxProps = Omit<ListBoxBaseProps, 'state'>;

export const ListBox = React.forwardRef<ListBoxElement, ListBoxProps>((props, forwardedRef) => {
  const state = useListState(props);

  return <ListBoxBase {...props} state={state} ref={forwardedRef} />;
});
