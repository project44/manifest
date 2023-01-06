import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Thumbnails from '../../../components/Thumbnails';
import DocsLayout from '../../../layouts/Docs';
import type { DocMeta as DocumentMeta } from '../../../types';

interface GettingStartedProperties {
  items: DocumentMeta[];
}

export default function GettingStarted(properties: GettingStartedProperties) {
  const { items } = properties;

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
    .filter((document_) => document_.slug.startsWith('/docs/getting-started') as boolean)
    .map((document_) => document_.meta as DocumentMeta);

  return {
    props: { items },
  };
};
