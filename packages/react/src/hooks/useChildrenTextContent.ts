import React from 'react';

export function useChildrenTextContent(children?: React.ReactNode) {
  const childrenTextContent = React.useMemo(
    () =>
      children === undefined
        ? ''
        : React.Children.toArray(children)
            .filter((child) => typeof child === 'string')
            .join(' '),
    [children],
  );

  return childrenTextContent;
}
