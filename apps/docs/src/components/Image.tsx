import * as React from 'react';
import { Box } from '@project44-manifest/react';
import NextImage, { ImageProps } from 'next/image';

const Image: React.FC<ImageProps> = (props) => (
	<Box
		css={{
			backgroundColor: '$background-secondary',
			borderRadius: '$small',
			marginBottom: '$x-large',
		}}
	>
		<NextImage layout="responsive" width={700} height={400} objectFit="contain" {...props} />
	</Box>
);

export default Image;
