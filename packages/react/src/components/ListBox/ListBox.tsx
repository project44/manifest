import * as ListBoxBase from '../ListBoxBase';
import * as React from 'react';
import { Item, Section } from '@react-stately/collections';
import { useListState } from '@react-stately/list';

/**
 * -----------------------------------------------------------------------------------------------
 * ListBox
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxElement = React.ElementRef<typeof ListBoxBase.ListBox>;

type ListBoxProps = Omit<ListBoxBase.ListBoxProps, 'state'>;

const ListBox = React.forwardRef<ListBoxElement, ListBoxProps>((props, forwardedRef) => {
  const state = useListState(props);

  return <ListBoxBase.ListBox {...props} state={state} ref={forwardedRef} />;
});

if (__DEV__) {
  ListBox.displayName = 'ManifestListBox';
}

/**
 * -----------------------------------------------------------------------------------------------
 * ListBoxItem
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxItemProps = Omit<ListBoxBase.ListBoxItemProps, 'isVirtualized' | 'item' | 'onAction'>;

const ListBoxItem = Item as (props: ListBoxItemProps) => JSX.Element;

/**
 * -----------------------------------------------------------------------------------------------
 * ListBoxItem
 * -----------------------------------------------------------------------------------------------
 */

type ListBoxSectionProps = Omit<ListBoxBase.ListBoxSectionProps, 'item'>;

const ListBoxSection = Section as (props: ListBoxBase.ListBoxSectionProps) => JSX.Element;

export { ListBox, ListBoxItem, ListBoxSection };
export { ListBoxProps, ListBoxItemProps, ListBoxSectionProps };
