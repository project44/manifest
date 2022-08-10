import * as React from 'react';
import { usePopover } from './usePopover';

export type PopoverContext = ReturnType<typeof usePopover>;

export const PopoverContext = React.createContext<PopoverContext | null>(null);

export const usePopoverContext = () => React.useContext(PopoverContext);
