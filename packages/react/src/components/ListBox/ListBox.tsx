import * as React from 'react';
import { ListBoxBase, ListBoxBaseProps } from '../internal/ListBoxBase';
import { useListState } from '@react-stately/list';

export type ListBoxProps = Omit<ListBoxBaseProps, 'state'>;

export const ListBox = React.forwardRef<React.ElementRef<typeof ListBoxBase>, ListBoxProps>(
  (props, forwardedRef) => {
    const state = useListState(props);

    return <ListBoxBase {...props} state={state} ref={forwardedRef} />;
  },
);
