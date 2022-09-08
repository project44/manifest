import type { DocMeta } from '../../../types';
import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import DocsLayout from '../../../layouts/Docs';
import Thumbnails from '../../../components/Thumbnails';
import { GetStaticProps } from 'next';

interface GettingStartedProps {
  items: DocMeta[];
}

export default function GettingStarted(props: GettingStartedProps) {
  const { items } = props;

  return (
    <DocsLayout
      description="Manifest Design System is the foundation on which all products at project44 are built."
      title="Getting Started"
    >
      <Thumbnails items={items} />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const items = allDocs
    .filter(doc => doc.slug.startsWith('/docs/getting-started') as boolean)
    .map(doc => doc.meta as DocMeta);

  return {
    props: { items },
  };
};
