import * as React from 'react';

export interface CreateContextOptions {
  /** The display name of the context */
  name?: string;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

/**
 * Creates react context with a  provider and hook.
 */
export function createContext<T>(options: CreateContextOptions = {}): CreateContextReturn<T> {
  const { name } = options;

  const Context = React.createContext<T | undefined>(undefined);

  Context.displayName = name;

  const useContext = () => React.useContext(Context);

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
