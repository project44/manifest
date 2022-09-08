import type { DocMeta } from '../../../types';
import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import DocsLayout from '../../../layouts/Docs';
import Thumbnails from '../../../components/Thumbnails';
import { GetStaticProps } from 'next';

interface FoundationsProps {
  items: DocMeta[];
}

export default function Foundations(props: FoundationsProps) {
  const { items } = props;

  return (
    <DocsLayout title="Foundations">
      <Thumbnails items={items} />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const items = allDocs
    .filter(doc => doc.slug.startsWith('/docs/foundations') as boolean)
    .map(doc => doc.meta as DocMeta);

  return {
    props: { items },
  };
};
