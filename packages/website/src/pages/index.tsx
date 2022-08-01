import * as React from 'react';
import { Hero } from '../components';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home() {
  const context = useDocusaurusContext();

  const { siteConfig } = context;

  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

export default Home;
