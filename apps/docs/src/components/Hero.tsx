import * as React from 'react';
import { Box, Button, Container, Flex, pxToRem, Typography } from '@project44-manifest/react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

function Hero() {
	const router = useRouter();

	const handleClick = React.useCallback(() => {
		void router.push('/docs/getting-started');
	}, [router]);

	return (
		<Container>
			<Box css={{ paddingTop: pxToRem(180) }}>
				<Flex css={{ maxWidth: pxToRem(1070), mx: 'auto' }}>
					<Flex
						css={{
							flexBasis: '60%',
							flexDirection: 'column',
							flexGrow: 0,
							justifyContent: 'center',
							maxWidth: '60%',
						}}
					>
						<Typography
							as="h1"
							css={{
								fontSize: pxToRem(48),
								fontWeight: '$bold',
								letterSpacing: '$x-small',
								lineHeight: pxToRem(66),
								marginBottom: '$large',

								'> .gradient': {
									backgroundImage: '$brand-gradient',
									backgroundClip: 'text',
									'-webkit-text-fill-color': 'transparent',
								},
							}}
						>
							<span className="gradient">Manifesting</span> experiences through design.
						</Typography>
						<Typography as="p" variant="body">
							A shared design language for designing and building products at project44.
						</Typography>
						<Box css={{ py: '$large' }}>
							<Button onPress={handleClick}>Get Started</Button>
						</Box>
					</Flex>
					<Flex
						css={{
							flexBasis: '40%',
							flexDirection: 'column',
							flexGrow: 0,
							justifyContent: 'center',
							maxWidth: '40%',
							position: 'relative',
						}}
					>
						<Box
							css={{ left: 0, position: 'absolute', top: 0, transform: 'translate(-13%, -20%)' }}
						>
							<NextImage height="356" layout="fixed" src="/images/hero.svg" width="498" />
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}

export default Hero;
