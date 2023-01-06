import * as React from 'react';
import NextImage from 'next/image';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  pxToRem,
  Stack,
  Typography,
} from '@project44-manifest/react';

function Value() {
  return (
    <Container css={{ paddingBottom: pxToRem(128) }}>
      <Box css={{ paddingTop: pxToRem(128) }}>
        <Box css={{ maxWidth: pxToRem(1070), mx: 'auto' }}>
          <Stack css={{ paddingBottom: pxToRem(64) }}>
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
              We make <span className="gradient">supply chains</span> work.
            </Typography>
            <Typography as="p" variant="body">
              Manifest Design System sets out to demonstrate just that through a collection of
              reusable components, patterns, principles, and guidelines that enable design at scale.
              It’s a shared design language for all involved in designing and building products.
            </Typography>
          </Stack>
          <Stack css={{ gap: pxToRem(66), position: 'relative', zIndex: 1 }}>
            <Card css={{ alignSelf: 'flex-end', height: pxToRem(174), width: pxToRem(596) }}>
              <CardHeader>Optimize for clarity</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  We choose to have an opinion about where to direct attention – optimize for
                  clarity. Display elements and content only when needed and use hierarchy to drive
                  focus.
                </Typography>
              </CardBody>
            </Card>

            <Card
              css={{
                alignSelf: 'flex-start',
                height: pxToRem(174),
                marginLeft: pxToRem(150),
                width: pxToRem(596),
              }}
            >
              <CardHeader>Prefer adaptability over one size fits all</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  Our users need different experiences depending on the task at hand. Design with
                  adaptability in mind, enabling role-based customization.
                </Typography>
              </CardBody>
            </Card>

            <Card
              css={{
                alignSelf: 'flex-end',
                height: pxToRem(174),
                marginRight: pxToRem(204),
                width: pxToRem(596),
              }}
            >
              <CardHeader>Lean on consistency in order to be efficient</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  We opt for consistency in the details so we can focus on the higher-level UX
                  challenges. This frees us to innovate toward the best solution for our users in a
                  more efficient way.
                </Typography>
              </CardBody>
            </Card>

            <Card
              css={{
                alignSelf: 'flex-start',
                height: pxToRem(174),
                marginLeft: pxToRem(32),
                width: pxToRem(596),
              }}
            >
              <CardHeader>Think inclusively</CardHeader>
              <CardBody>
                <Typography as="p" variant="body">
                  All users deserve an accessible and ethical experience within our products. The
                  system is built with accessibility in mind, not as the last step.
                </Typography>
              </CardBody>
            </Card>

            <Box
              css={{
                left: 0,
                position: 'absolute',
                top: 0,
                transform: 'translate(36px, 72px)',
                zIndex: -1,
              }}
            >
              <NextImage height="775" layout="fixed" src="/images/matrix.svg" width="1000" />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Value;
