import type { ListBoxItemProps } from '../ListBoxItem';
import * as React from 'react';
import { Item } from '@react-stately/collections';

export const SelectItem = Item as (props: SelectItemProps) => JSX.Element;

export type SelectItemProps = ListBoxItemProps;
