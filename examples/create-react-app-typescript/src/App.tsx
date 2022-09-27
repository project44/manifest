import * as React from 'react';
import { Box, Flex, Link, Typography } from '@project44-manifest/react';

function App() {
	return (
		<Box>
			<Flex css={{ gap: '$small' }} orientation="vertical">
				<Typography variant="body">
					Edit <code>src/App.tsx</code> and save to reload.
				</Typography>
				<Link href="https://p44design.systems" target="_blank" rel="noopener noreferrer">
					Learn Manifest
				</Link>
			</Flex>
		</Box>
	);
}

export default App;
