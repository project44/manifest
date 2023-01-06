import * as React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Value from '../components/Value';
import DefaultLayout from '../layouts/Default';

function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
      <Value />
    </DefaultLayout>
  );
}

export default Home;
