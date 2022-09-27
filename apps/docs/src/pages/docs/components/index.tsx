import type { DocMeta } from '../../../types';
import * as React from 'react';
import { allDocs } from 'contentlayer/generated';
import DocsLayout from '../../../layouts/Docs';
import Thumbnails from '../../../components/Thumbnails';
import { GetStaticProps } from 'next';

interface ComponentsProps {
	items: DocMeta[];
}

export default function Components(props: ComponentsProps) {
	const { items } = props;

	return (
		<DocsLayout title="Components">
			<Thumbnails items={items} />
		</DocsLayout>
	);
}

export const getStaticProps: GetStaticProps = () => {
	const items = allDocs
		.filter((doc) => doc.slug.startsWith('/docs/components') as boolean)
		.map((doc) => doc.meta as DocMeta);

	return {
		props: { items },
	};
};
