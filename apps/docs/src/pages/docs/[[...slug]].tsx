import * as React from 'react';
import type { Doc } from 'contentlayer/generated';
import { allDocs } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXComponents from '../../components/MDXComponents';
import DocsLayout from '../../layouts/Docs';
import type { TOC } from '../../types';

interface DocsProps {
  doc: Doc;
  toc?: TOC[];
}

export default function Docs(properties: DocsProps) {
  const { doc, toc } = properties;

  const Doc = useMDXComponent(doc.body.code as string);

  return (
    <DocsLayout description={doc.meta.description} title={doc.meta.title} toc={toc}>
      <Doc components={MDXComponents} />
    </DocsLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allDocs.map((document_) => document_.slug as string);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = Array.isArray(context?.params.slug) ? context?.params.slug.join('/') : context?.params.slug;
  const document_ = allDocs.find((document__) => document__.slug.endsWith(slug) as boolean) as Doc;
  const toc = document_?.meta?.toc;

  return {
    props: { doc: document_, toc },
  };
};
