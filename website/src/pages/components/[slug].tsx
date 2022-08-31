import type { Component } from 'contentlayer/generated';
import * as React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { allComponents } from 'contentlayer/generated';
import MDXComponent from 'src/components/MDXComponent';

interface ComponentPageProps {
  doc: Component;
}

export default function ComponentPage(props: ComponentPageProps) {
  const { doc } = props;

  return <MDXComponent code={doc.body.code} />;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allComponents.map(doc => `/components/${doc.slug as string}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ctx => {
  const { params } = ctx;

  const doc = allComponents.find(doc => doc.slug === params!.slug);

  if (!doc) {
    return {
      notFound: true,
    };
  }

  return {
    props: { doc },
  };
};
