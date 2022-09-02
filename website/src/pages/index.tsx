import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Icon,
  IconButton,
  pxToRem,
  Stack,
  Typography,
} from '@project44-manifest/react';
import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Nekker from '../components/Nekker';
import NextImage from 'next/image';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = React.useCallback(() => {
    void router.push('/getting-started');
  }, [router]);

  return (
    <Stack>
      <Box as="section">
        <Container css={{ py: '$$headerOffset' }}>
          <Grid columns="repeat(2, 1fr)">
            <GridItem css={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography
                as="h1"
                css={{
                  fontSize: pxToRem(50),
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
            </GridItem>
            <GridItem>
              <NextImage height="500" src="/images/hero.svg" width="800" />
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Box as="section">
        <Container css={{ paddingTop: pxToRem(266) }}>
          <Grid columns="repeat(3, 1fr)" gap="xl">
            <GridItem>
              <ActionCard
                description="Find all the design decisions that power the system."
                href="/foundations"
                src="/images/typography.png"
                title="Foundations"
              />
            </GridItem>
            <GridItem>
              <ActionCard
                description="Find all the design decisions that power the system."
                href="/components"
                src="/images/dropdown.png"
                title="Components"
              />
            </GridItem>
            <GridItem>
              <ActionCard
                description="Find all the design decisions that power the system."
                href="/patterns"
                src="/images/table.png"
                title="Components"
              />
            </GridItem>
          </Grid>
        </Container>
        {/* <Nekker /> */}
      </Box>

      <Box as="section">
        <Container css={{ py: pxToRem(266) }}>
          <Stack css={{ marginBottom: pxToRem(130) }}>
            <Typography
              as="h2"
              css={{
                marginBottom: '$large',
              }}
              variant="display"
            >
              Our mission at project44 is clear — We make supply chains work.
            </Typography>
            <Typography as="p" variant="body">
              Manifest Design System sets out to demonstrate just that through a collection of
              reusable components, patterns, principles, and guidelines that enable design at scale.
              It’s a shared design language for all involved in designing and building products.
            </Typography>
          </Stack>

          <Stack
            gap="xl"
            css={{
              alignItems: 'center',
              backgroundImage: 'url(/images/tree.svg)',
              backgroundSize: '100% 100%',
              height: pxToRem(728),
            }}
          >
            <Card css={{ minHeight: pxToRem(174), maxWidth: pxToRem(636) }}>
              <CardHeader>Optimize for clarity</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  We choose to have an opinion about where to direct attention – optimize for
                  clarity. Display elements and content only when needed and use hierarchy to drive
                  focus.
                </Typography>
              </CardBody>
            </Card>

            <Card css={{ minHeight: pxToRem(174), maxWidth: pxToRem(636) }}>
              <CardHeader>Prefer adaptability over one size fits all</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  Our users need different experiences depending on the task at hand. Design with
                  adaptability in mind, enabling role-based customization.
                </Typography>
              </CardBody>
            </Card>

            <Card css={{ minHeight: pxToRem(174), maxWidth: pxToRem(636) }}>
              <CardHeader>Lean on consistency in order to be efficient</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  We opt for consistency in the details so we can focus on the higher-level UX
                  challenges. This frees us to innovate toward the best solution for our users in a
                  more efficient way.
                </Typography>
              </CardBody>
            </Card>

            <Card css={{ minHeight: pxToRem(174), maxWidth: pxToRem(636) }}>
              <CardHeader>Think inclusively</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  All users deserve an accessible and ethical experience within our products. The
                  system is built with accessibility in mind, not as the last step.
                </Typography>
              </CardBody>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
