import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface MDXComponentProps {
  code?: string;
}

export default function MDXComponent(props: MDXComponentProps) {
  const { code } = props;

  const Comp = useMDXComponent(code ?? '');

  return <Comp />;
}
