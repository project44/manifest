import type { Language } from 'prism-react-renderer';
import * as React from 'react';
import { Box } from '@project44-manifest/react';
import Container from './components/Container';
import Highlight from './components/Highlight';
import dynamic from 'next/dynamic';
import theme from 'prism-react-renderer/themes/dracula';
import { useStyles } from './CodeBlock.styles';

interface CodeBlockProps {
	children: any;
	className?: string;
	live?: boolean;
	showToolbar?: boolean;
}

const Live = dynamic(() => import('./components/Live'));

function CodeBlock(props: CodeBlockProps) {
	const {
		children,
		className: classNameProp,
		live = true,
		showToolbar = true,
	} = props.children.props;

	const language = classNameProp?.replace(/language-/, '') as Language;
	const code = children.trim();

	useStyles();

	if ((language === 'jsx' || language === 'tsx') && live) {
		return <Live code={code} showToolbar={showToolbar} theme={theme} />;
	}

	return (
		<Box css={{ position: 'relative', zIndex: 0 }}>
			<Container css={{ mb: '$large', px: 0, overflow: 'hidden' }}>
				<Highlight code={code} language={language} theme={theme} />
			</Container>
		</Box>
	);
}

export default CodeBlock;
