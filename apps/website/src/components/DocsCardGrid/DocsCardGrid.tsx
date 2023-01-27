import * as React from 'react';

interface DocsCardGridProps {
  children: React.ReactNode;
}

export function DocsCardGrid(props: DocsCardGridProps) {
  const { children } = props;

  return <div className="docs-card-grid">{children}</div>;
}
