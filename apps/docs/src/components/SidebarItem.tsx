import type { SidebarItem as SidebarItemType } from '../../sidebar.config';
import * as React from 'react';
import { Box, Link, pxToRem, Stack, styled, Typography } from '@project44-manifest/react';
import NextLink from 'next/link';

interface SidebarItemProps {
  currentPath: string;
  href: string;
  items: SidebarItemType[];
  title: string;
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

function SidebarItem(props: SidebarItemProps) {
  const { currentPath, href, items, title } = props;

  const isCategory = !!items;

  if (isCategory) {
    return (
      <Box as="li" key={href}>
        <Typography css={{ display: 'inline-block', py: pxToRem(9) }} variant="bodyBold">
          {title}
        </Typography>
        <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          {items?.map(item => (
            <Box as="li" key={item.href}>
              <NextLink href={item.href} key={item.href} passHref>
                <StyledLink isActive={currentPath === item.href}>{item.title}</StyledLink>
              </NextLink>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  }

  return (
    <Box as="li" key={href}>
      <NextLink href={href} key={href} passHref>
        <StyledLink isActive={currentPath === href}>{title}</StyledLink>
      </NextLink>
    </Box>
  );
}

export default SidebarItem;
