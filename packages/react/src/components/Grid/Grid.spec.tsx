import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';
import { GridItem } from '../GridItem';

describe('@project44-manifest/react - Grid', () => {
	it('should render without error', () => {
		render(
			<Grid>
				<GridItem>Item</GridItem>
				<GridItem>Item</GridItem>
				<GridItem>Item</GridItem>
				<GridItem>Item</GridItem>
			</Grid>,
		);

		const items = screen.getAllByText('Item');

		expect(items).toHaveLength(4);
	});

	it('should render with column and row rules', () => {
		render(
			<Grid columns="repeat(5, 1fr)" gap="small">
				<GridItem column={2}>Item</GridItem>
				<GridItem row={2}>Item</GridItem>
			</Grid>,
		);

		const items = screen.getAllByText('Item');

		expect(items).toHaveLength(2);
	});
});
