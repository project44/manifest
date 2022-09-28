import * as React from 'react';
import { Box, Stack, pxToRem, Typography } from '@project44-manifest/react';

interface ColorSwatchProps {
	hex: string;
	name: string;
	token: string;
}

function ColorSwatch(props: ColorSwatchProps) {
	const { hex, name, token } = props;

	return (
		<Stack>
			<Box
				css={{
					backgroundColor: hex,
					borderTopLeftRadius: '$small',
					borderTopRightRadius: '$small',
					display: 'flex',
					minHeight: pxToRem(120),
				}}
			/>
			<Stack
				css={{
					backgroundColor: '$background-secondary',
					borderBottomLeftRadius: '$small',
					borderBottomRightRadius: '$small',
					padding: '$large',
				}}
				gap="small"
			>
				<Typography variant="bodyBold">{name}</Typography>
				<Typography variant="subtext">{hex.toUpperCase()}</Typography>
				<Typography variant="subtext">{token}</Typography>
			</Stack>
		</Stack>
	);
}

export default ColorSwatch;
