import * as React from 'react';
import { Box, Container, pxToRem, Stack } from '@project44-manifest/react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <Box
      as="header"
      css={{
        backgroundColor: '$background-surface',
        borderBottom: '1px solid $border-primary',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '$sticky',
      }}
    >
      <Container
        css={{ alignItems: 'center', display: 'flex', minHeight: pxToRem(72), gap: '$medium' }}
        maxWidth="medium"
      >
        <Link href="/">
          <Stack
            as="a"
            css={{ alignItems: 'center', gap: '$medium', typography: '$subtext' }}
            orientation="horizontal"
          >
            <Image
              src="/images/logo.svg"
              layout="fixed"
              width={32}
              height={32}
              alt="Manifest Design System logo"
            />
            Manifest Design System
          </Stack>
        </Link>
      </Container>
    </Box>
  );
}

export default Header;
