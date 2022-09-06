import type { TOCItem } from '../../../types';
import type { Doc } from 'contentlayer/generated';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allDocs } from 'contentlayer/generated';
import DocLayout from '../../../layouts/Doc';
import MDXComponents from '../../../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface ComponentPageProps {
  doc: Doc;
  toc?: TOCItem[];
}

export default function ComponentPage(props: ComponentPageProps) {
  const { doc, toc } = props;

  const Doc = useMDXComponent(doc.body.code as string);

  return (
    <DocLayout description={doc.meta.description} title={doc.meta.title} toc={toc}>
      <Doc components={MDXComponents} />
    </DocLayout>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allDocs
    .filter(doc => doc.slug.startsWith('/docs/components') as boolean)
    .map(doc => doc.slug as string);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ctx => {
  const slug = ['components', ctx?.params.slug].join('/');
  const doc = allDocs.find(doc => doc.slug.endsWith(slug) as boolean) as Doc;
  const toc = doc?.meta?.toc;

  return {
    props: { doc, toc },
  };
};
