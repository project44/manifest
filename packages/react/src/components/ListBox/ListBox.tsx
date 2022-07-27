import * as React from 'react';
import { ListBoxBase, ListBoxBaseProps } from '../internal/ListBoxBase';
import { useListState } from '@react-stately/list';

type ListBoxElement = React.ElementRef<typeof ListBoxBase>;

type ListBoxProps = Omit<ListBoxBaseProps, 'state'>;

const ListBox = React.forwardRef<ListBoxElement, ListBoxProps>((props, forwardedRef) => {
  const state = useListState(props);

  return <ListBoxBase {...props} state={state} ref={forwardedRef} />;
});

if (__DEV__) {
  ListBox.displayName = 'ManifestListBox';
}

export { ListBox };
export { ListBoxProps };
