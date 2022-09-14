import * as React from 'react';
import { Box, Container, Flex, Grid, GridItem, pxToRem } from '@project44-manifest/react';
import ActionCard from './ActionCard';

function Features() {
  return (
    <Container>
      <Box
        css={{
          paddingTop: pxToRem(118),
        }}
      >
        <Flex
          css={{
            alignItems: 'center',
            backgroundImage: 'url(/images/nekker.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: pxToRem(768),
          }}
        >
          <Grid css={{ gap: '40px', maxWidth: pxToRem(1070), mx: 'auto' }} columns="repeat(3, 1fr)">
            <GridItem>
              <ActionCard
                description="Find all the design decisions that power the system."
                href="/docs/tokens"
                src="/images/thumbnails/typography.png"
                title="Tokens"
              />
            </GridItem>
            <GridItem>
              <ActionCard
                description="Find all the components that comprise the system."
                href="/docs/components"
                src="/images/thumbnails/dropdown.png"
                title="Components"
              />
            </GridItem>
            <GridItem>
              <ActionCard
                description="Find all the design design patterns that evolve the system."
                href="/docs/patterns"
                src="/images/thumbnails/table.png"
                title="Patterns"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Container>
  );
}

export default Features;
