import type { TOC as TOCType } from '../types';
import * as React from 'react';
import { Box, pxToRem, Stack } from '@project44-manifest/react';
import TOCItem from '../components/TOCItem';

interface TOCProps {
  items?: TOCType[];
}

function TOC(props: TOCProps) {
  const { items = [] } = props;

  const [currentHeading, setCurrentHeading] = React.useState<string>('');

  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const headings = items.map(item => document.getElementById(item.slug));

    observer.current?.disconnect();
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry?.isIntersecting) {
            setCurrentHeading(entry.target.getAttribute('id') ?? '');
          }
        });
      },
      { rootMargin: '0% 0% -85% 0%' },
    );

    headings.forEach(heading => {
      if (heading) observer.current?.observe(heading);
    });

    return () => observer.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <Box as="nav">
      <Box
        css={{
          height: `calc(100vh - ${pxToRem(72)})`,
          order: 2,
          py: '$medium',
          position: 'sticky',
          top: pxToRem(72),
          width: pxToRem(240),
        }}
      >
        <Stack
          as="ul"
          css={{
            borderLeft: '1px solid $border-primary',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          {items.map(item => (
            <TOCItem
              content={item.content}
              currentHeading={currentHeading}
              key={item.slug}
              level={item.lvl}
              slug={item.slug}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default TOC;
