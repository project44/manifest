import * as React from 'react';
import DefaultLayout from '../layouts/Default';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Value from '../components/Value';

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
