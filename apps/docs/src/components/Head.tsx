import * as React from 'react';
import NextHead from 'next/head';

interface HeadProperties {
  description?: string;
  title?: string;
}

function Head(properties: HeadProperties) {
  const { description, title: titleProperty } = properties;

  const titlePrefix = 'Manifest Design System';

  let title = titlePrefix;

  if (titleProperty) {
    title = `${titleProperty} - ${titlePrefix}`;
  }

  return (
    <NextHead>
      <title>{title}</title>
      {description && <meta content={description} name="description" />}
    </NextHead>
  );
}

export default Head;
