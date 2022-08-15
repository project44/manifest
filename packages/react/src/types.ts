import type { CSSProperties } from 'react';
import React from 'react';
import { CSS } from './styles';

export type As<Props = any> = React.ElementType<Props>;

export type ComponentProps<T extends As> = PropsWithoutRef<React.ComponentProps<T>> & {
  /** Root element override. */
  as?: As;
  /** Theme aware style object. */
  css?: CSS;
};

/**
 * Return a set of merged props.
 */
export type MergeProps<T extends HTMLElement = any, P = Record<string, any>> = (
  props?: P & Omit<React.HTMLAttributes<T>, keyof P>,
  ref?: React.Ref<any> | React.RefObject<any>,
) => P & Omit<React.HTMLAttributes<T>, keyof P>;

// Many of these interfaces are clones of react-aria types.
// Cherry-picking the ones we use most often.

export interface DOMProps {
  /** The element's unique identifier */
  id?: string;
}

export interface StyleProps {
  /** Class name attached to the root element. */
  className?: string;
  /** Theme aware style object. */
  css?: CSS;
  /** Pure css styles */
  style?: CSSProperties;
}

export type PropsWithoutRef<P> = 'ref' extends keyof P
  ? P extends unknown
    ? Omit<P, 'ref'>
    : P
  : P;
