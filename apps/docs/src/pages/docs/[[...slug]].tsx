import type { Doc } from 'contentlayer/generated';
import type { TOC } from '../../types';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allDocs } from 'contentlayer/generated';
import DocsLayout from '../../layouts/Docs';
import MDXComponents from '../../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface DocsProps {
  doc: Doc;
  toc?: TOC[];
}

export default function Docs(props: DocsProps) {
  const { doc, toc } = props;

  const Doc = useMDXComponent(doc.body.code as string);

  return (
    <DocsLayout description={doc.meta.description} title={doc.meta.title} toc={toc}>
      <Doc components={MDXComponents} />
    </DocsLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allDocs.map((doc) => doc.slug as string);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const slug = Array.isArray(ctx?.params.slug) ? ctx?.params.slug.join('/') : ctx?.params.slug;
  const doc = allDocs.find((doc) => doc.slug.endsWith(slug) as boolean) as Doc;
  const toc = doc?.meta?.toc;

  return {
    props: { doc, toc },
  };
};
