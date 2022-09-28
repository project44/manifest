import * as React from 'react';
import * as tokens from '@project44-manifest/design-tokens';
import { Grid, GridItem } from '@project44-manifest/react';
import ColorSwatch from './ColorSwatch';

interface ColorsProps {
	category?: string;
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

function Colors(props: ColorsProps) {
	const { category } = props;

	const colors = Object.keys(tokens)
		.filter((token) => {
			if (token.includes(category)) {
				return token;
			}

			return null;
		})
		.sort(collator.compare);

	return (
		<Grid css={{ py: '$large' }} columns="repeat(3, 1fr)" gap="large">
			{colors.map((token) => {
				const name = token.replace(category, '');
				const hex = tokens[token];

				return (
					<GridItem key={name}>
						<ColorSwatch hex={hex} name={name} token={token} />
					</GridItem>
				);
			})}
		</Grid>
	);
}

export default Colors;
