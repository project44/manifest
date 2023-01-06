import * as React from 'react';
import { Box, Link, pxToRem, styled } from '@project44-manifest/react';
import NextLink from 'next/link';

interface TOCItemProps {
  content: string;
  currentHeading: string;
  slug: string;
  level: number;
}

const StyledLink = styled(Link, {
  color: '$text-primary',
  display: 'flex',
  px: '$large',
  textDecoration: 'none',

  '&::before': {
    backgroundColor: '$palette-indigo-500',
    borderRadius: '$full',
    content: '',
    display: 'block',
    height: pxToRem(24),
    left: `-${pxToRem(1)}`,
    position: 'absolute',
    width: pxToRem(3),
  },

  variants: {
    isActive: {
      true: {
        '&::before': {
          opacity: 1,
        },
      },
      false: {
        '&::before': {
          opacity: 0,
        },
      },
    },
    isNested: {
      true: {
        paddingLeft: '$x-large',
        typography: '$subtext',
      },
      false: {
        typography: '$subtext-bold',
      },
    },
  },
});

function TOCItem(props: TOCItemProps) {
  const { content, currentHeading, level, slug } = props;

  return (
    <Box as="li" css={{ py: '$x-small' }} key={slug}>
      <NextLink href={`#${slug}`} passHref>
        <StyledLink isActive={currentHeading === slug} isNested={level > 2}>
          {content}
        </StyledLink>
      </NextLink>
    </Box>
  );
}

export default TOCItem;
