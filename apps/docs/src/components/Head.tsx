import * as React from 'react';
import NextHead from 'next/head';

interface HeadProps {
	description?: string;
	title?: string;
}

function Head(props: HeadProps) {
	const { description, title: titleProp } = props;

	const titlePrefix = 'Manifest Design System';

	let title = titlePrefix;

	if (titleProp) {
		title = `${titleProp} - ${titlePrefix}`;
	}

	return (
		<NextHead>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
		</NextHead>
	);
}

export default Head;
