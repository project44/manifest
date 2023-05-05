import type { RadioGroupState } from '@react-stately/radio';
import { createContext } from '../../utils';

export interface SegmentedControlContext extends RadioGroupState {}

export const [SegmentedControlProvider, useSegmentedControl] =
  createContext<SegmentedControlContext>({
    name: 'SegmentedControlContext',
  });
