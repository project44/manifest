import type { ListBoxItemProps, ListBoxItemOptions } from '../ListBoxItem';
import * as React from 'react';
import { Item } from '@react-stately/collections';

export const ComboboxItem = Item as (
  props: Omit<
    ListBoxItemOptions & { children: React.ReactNode },
    'isVirtualized' | 'item' | 'onAction'
  >,
) => JSX.Element;

export type ComboboxItemProps = ListBoxItemProps;
