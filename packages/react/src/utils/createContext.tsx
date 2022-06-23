import * as React from 'react';

export function createContext<ContextType extends object | null>(
  name: string,
  defaultContext?: ContextType,
) {
  const Context = React.createContext<ContextType | undefined>(defaultContext);

  function Provider(props: ContextType & { children: React.ReactNode }) {
    const { children, ...context } = props;

    // Only re-memoize when prop values change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = React.useMemo(() => context, Object.values(context)) as ContextType;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContext() {
    const context = React.useContext(Context);

    return context;
  }

  Provider.displayName = `${name}Provider`;

  return [Provider, useContext] as const;
}
