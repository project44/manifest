import * as React from 'react';
import clsx from 'clsx';
import Fuse from 'fuse.js';
import startCase from 'lodash.startcase';
import Link from '@docusaurus/Link';
import {
  Flex,
  Grid,
  GridItem,
  Separator,
  Stack,
  TextField,
  Typography,
} from '@project44-manifest/react';
import * as Icons from '@project44-manifest/react-icons';
import CodeBlock from '@theme/CodeBlock';

const fuse = new Fuse(Object.keys(Icons), { threshold: 0.25 });

const getIcons = (currentSearchText?: string) =>
  currentSearchText
    ? fuse.search(currentSearchText).map((result) => result.item)
    : Object.keys(Icons);

export function IconGrid() {
  const [selectedIcon, setSelectedIcon] = React.useState('Add');
  const [searchText, setSearchText] = React.useState('');
  const [icons, setIcons] = React.useState<string[]>([]);

  const handleItemClick = React.useCallback(
    (string: string) => () => {
      setSelectedIcon(string);
    },
    [],
  );

  const handleSearch = React.useCallback((value: string) => {
    setSearchText(value);

    setIcons(getIcons(value));
  }, []);

  React.useEffect(() => {
    setIcons(getIcons());
  }, []);

  const IconComp = Icons[selectedIcon as keyof typeof Icons];

  return (
    <Grid columns="1fr 24rem" gap="medium">
      <GridItem>
        <Stack gap="large">
          <TextField startIcon={<Icons.Search />} value={searchText} onChange={handleSearch} />
          <Grid className="icon-grid" columns="repeat(auto-fill, minmax(200px, 1fr))">
            {icons.map((item) => {
              if (item === 'createIcon' || item === 'Icon') return null;
              const Comp = Icons[item as keyof typeof Icons];

              return (
                <GridItem
                  key={item}
                  className={clsx(
                    'icon-grid__item',
                    selectedIcon === item && 'icon-grid__item--selected',
                  )}
                  onClick={handleItemClick(item)}
                >
                  <Comp />
                  <Typography variant="subtext">{startCase(item)}</Typography>
                </GridItem>
              );
            })}
          </Grid>
        </Stack>
      </GridItem>
      <GridItem>
        <div className="icon-import">
          <Flex align="center" className="icon-import__icon" justify="center">
            <IconComp />
          </Flex>

          <Separator />
          <Stack className="icon-import__meta">
            <Typography variant="subtitle">Figma</Typography>
            <Typography>
              Grab icons from the manifest{' '}
              <Link href="https://www.figma.com/file/2vyIjgJEhVc1spMWwkgzQ5/Manifest-Design-System?node-id=92%3A1529">
                figma
              </Link>{' '}
              library.
            </Typography>
          </Stack>

          <Separator />

          <Stack className="icon-import__meta">
            <Typography variant="subtitle">React</Typography>
            <Typography>Import icons from the manifest react icon library.</Typography>
            <CodeBlock className="icon-import__code-block" language="jsx" title="React import">
              {`import {
  ${selectedIcon} 
} from '@project44-manifest/react-icons';
`}
            </CodeBlock>
          </Stack>
        </div>
      </GridItem>
    </Grid>
  );
}
