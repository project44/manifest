import type { ListBoxItemProps, ListBoxItemOptions } from '../ListBoxItem';
import * as React from 'react';
import { Item } from '@react-stately/collections';

export const SelectItem = Item as (
  props: Omit<
    ListBoxItemOptions & { children: React.ReactNode },
    'isVirtualized' | 'item' | 'onAction'
  >,
) => JSX.Element;

export type SelectItemProps = ListBoxItemProps;
