import * as React from 'react';
import { Box, Link, pxToRem, Stack, Typography } from '@project44-manifest/react';
import items from '../../sidebar.config';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();

  const isAcitve = React.useCallback(
    (href: string) => {
      const { slug } = router.query;

      const _slug = Array.isArray(slug) ? slug : [slug];
      const path = href.split('/');
      const pathSlug = path[path.length - 1];

      return _slug.includes(pathSlug);
    },
    [router],
  );

  return (
    <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      {items.map(item => {
        const isCategory = !!item.items;

        if (isCategory) {
          return (
            <Box as="li" key={item.href}>
              <Typography css={{ display: 'inline-block', py: pxToRem(9) }} variant="bodyBold">
                {item.title}
              </Typography>
              <Stack as="ul" css={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                {item.items?.map(nestItem => (
                  <Box as="li" key={nestItem.href}>
                    <NextLink href={nestItem.href} key={nestItem.href} passHref>
                      <Link
                        css={{
                          backgroundColor: isAcitve(nestItem.href)
                            ? '$background-secondary'
                            : 'transparent',
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
                        }}
                      >
                        {nestItem.title}
                      </Link>
                    </NextLink>
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        return (
          <Box as="li" key={item.href}>
            <NextLink href={item.href} key={item.href} passHref>
              <Link
                css={{
                  backgroundColor: isAcitve(item.href) ? '$background-secondary' : 'transparent',
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
                }}
              >
                {item.title}
              </Link>
            </NextLink>
          </Box>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
