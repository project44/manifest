import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Thumbnails from '../../../components/Thumbnails';
import DocsLayout from '../../../layouts/Docs';
import type { DocMeta as DocumentMeta } from '../../../types';

interface ComponentsProperties {
  items: DocumentMeta[];
}

export default function Components(properties: ComponentsProperties) {
  const { items } = properties;

  return (
    <DocsLayout title="Components">
      <Thumbnails items={items} />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const items = allDocs
    .filter((document_) => document_.slug.startsWith('/docs/components') as boolean)
    .map((document_) => document_.meta as DocumentMeta);

  return {
    props: { items },
  };
};
