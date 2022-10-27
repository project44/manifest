import { Provider, styled } from '@project44-manifest/react';

const Wrapper = styled('div', {
	alignItems: 'center',
	backgroundColor: '$background-primary',
	color: '$text-primary',
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',
});

export const decorators = [
	(Story) => (
		<Provider>
			<Wrapper>
				<Story />
			</Wrapper>
		</Provider>
	),
];

export const parameters = {
	layout: 'fullscreen',
	actions: { argTypesRegex: '^on[A-Z].*' },
};
