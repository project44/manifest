import * as React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Hero() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;

  return (
    <header className="hero">
      <div className="container">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6">
            <img alt="Manifest Design System" src="/img/hero.png" />
          </div>
          <div className="col col--6">
            <h1 className="hero__title">{siteConfig.tagline}</h1>
            <p className="hero__subtitle">
              A shared design language for all involved in designing and building products at
              project44.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
