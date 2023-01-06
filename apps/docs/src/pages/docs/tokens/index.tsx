import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import { GetStaticProps } from 'next';
import Thumbnails from '../../../components/Thumbnails';
import DocsLayout from '../../../layouts/Docs';
import type { DocMeta as DocumentMeta } from '../../../types';

interface TokensProperties {
  items: DocumentMeta[];
}

export default function Tokens(properties: TokensProperties) {
  const { items } = properties;

  return (
    <DocsLayout title="Tokens">
      <Thumbnails items={items} />
    </DocsLayout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const items = allDocs
    .filter((document_) => document_.slug.startsWith('/docs/tokens') as boolean)
    .map((document_) => document_.meta as DocumentMeta);

  return {
    props: { items },
  };
};
