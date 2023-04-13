import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return metadata.title;
}

export default function DocItemContent({ children }) {
  const {
    metadata: { frontMatter },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  } = useDoc();
  const syntheticTitle = useSyntheticTitle();

  const isProduction = frontMatter?.sidebar_custom_props?.status === 'production';

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          {!isProduction && frontMatter?.sidebar_custom_props?.status && (
            <span className={clsx('badge badge--success')}>
              {frontMatter.sidebar_custom_props.status}
            </span>
          )}
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
