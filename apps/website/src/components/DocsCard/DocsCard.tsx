import * as React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface DocsCardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  title: string;
  href?: string;
}

export function DocsCard(props: DocsCardProps) {
  const { children, icon, img, href, title } = props;

  const imgSrc = useBaseUrl(img);
  const isExternal = href?.startsWith('http');

  const content = (
    <>
      {img && <img alt="" className="docs-card__image" src={imgSrc} />}
      <div className="docs-card__container">
        {icon && React.cloneElement(icon as React.ReactElement, { className: 'docs-card__icon' })}
        <header className="docs-card__header manifest-typography manifest-typography--body-bold">
          {title}
        </header>
        {children}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        className="docs-card docs-card--link manifest-typography manifest-typography--caption"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  if (href && !isExternal) {
    return (
      <Link
        className="docs-card docs-card--link manifest-typography manifest-typography--caption"
        to={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="docs-card manifest-typography manifest-typography--caption">{content}</div>
  );
}
