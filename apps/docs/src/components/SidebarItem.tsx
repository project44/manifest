import * as React from 'react';
import NextLink from 'next/link';
import { Box, Link, pxToRem, Stack, styled, Typography } from '@project44-manifest/react';
import type { SidebarItem as SidebarItemType } from '../types';

interface SidebarItemProperties extends SidebarItemType {
  currentPath: string;
}

const StyledLink = styled(Link, {
  borderRadius: '$small',
  color: '$text-primary',
  display: 'flex',
  fontFamily: '$text',
  fontSize: '$medium',
  fontWeight: '$normal',
  letterSpacing: '$medium',
  lineHeight: '$medium',
  pl: pxToRem(20),
  pr: '$small',
  py: pxToRem(9),
  textDecoration: 'none',

  '&:hover': {
    color: '$text-primary',
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: '$background-secondary',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    isActive: false,
  },
});

function SidebarItem(properties: SidebarItemProperties) {
  const { currentPath, items, slug, title } = properties;

  const isCategory = Boolean(items);

  if (isCategory) {
    return (
      <Box key={slug} as="li">
        <Typography css={{ display: 'inline-block', py: pxToRem(9) }} variant="bodyBold">
          {title}
        </Typography>
        <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          {items?.map((item) => (
            <Box key={item.slug} as="li">
              <NextLink key={item.slug} passHref href={item.slug}>
                <StyledLink isActive={currentPath === item.slug}>{item.title}</StyledLink>
              </NextLink>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  }

  return (
    <Box key={slug} as="li">
      <NextLink key={slug} passHref href={slug}>
        <StyledLink isActive={currentPath === slug}>{title}</StyledLink>
      </NextLink>
    </Box>
  );
}

export default SidebarItem;
