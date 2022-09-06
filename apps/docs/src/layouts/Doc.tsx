import type { TOCItem } from '../types';
import * as React from 'react';
import { Box, pxToRem, Typography } from '@project44-manifest/react';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import TOC from '../components/TOC';

interface DocProps {
  children: React.ReactNode;
  description?: string;
  title?: string;
  toc?: TOCItem[];
}

function Doc(props: DocProps) {
  const { children, description, title, toc } = props;

  return (
    <Container css={{ $$navWidth: pxToRem(240), display: 'flex' }}>
      <Box
        as="nav"
        css={{
          borderRight: '1px solid $border-primary',
          height: 'calc(100vh - $$headerHeight)',
          position: 'sticky',
          pr: '$large',
          py: '$$headerOffset',
          top: '$$headerHeight',
          width: '$$navWidth',
        }}
      >
        <Sidebar />
      </Box>

      <Box
        as="article"
        css={{ flex: '1 1 0%', py: '$$headerOffset', px: pxToRem(64), width: '100%' }}
      >
        {title && (
          <Typography as="h1" css={{ marginBottom: '$x-large' }} variant="display">
            {title}
          </Typography>
        )}
        {description && <Typography variant="body">{description}</Typography>}
        {children}
      </Box>

      {toc && (
        <Box
          as="nav"
          css={{
            borderLeft: '1px solid $border-primary',
            height: 'calc(100vh - $$headerHeight)',
            position: 'sticky',
            paddingLeft: '$large',
            paddingRight: 0,
            py: '$$headerOffset',
            top: '$$headerHeight',
            width: '$$navWidth',
          }}
        >
          <TOC items={toc} />
        </Box>
      )}
    </Container>
  );
}

export default Doc;
