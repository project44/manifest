import type { ListBoxItemProps } from '../ListBoxItem';
import * as React from 'react';
import { Item } from '@react-stately/collections';

export const ComboboxItem = Item as (props: ComboboxItemProps) => JSX.Element;

export type ComboboxItemProps = ListBoxItemProps;
