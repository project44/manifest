import * as React from 'react';
import { Box } from '@project44-manifest/react';
import Header from './Header';
import Head from '../components/Head';

interface DefaultLayoutProps {
	children: React.ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
	const { children } = props;

	return (
		<>
			<Head description="The design system for project44" title="Manifest Design System" />
			<Header />
			<Box as="main">{children}</Box>
		</>
	);
}

export default DefaultLayout;
