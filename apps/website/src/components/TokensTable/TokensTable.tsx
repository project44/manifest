import * as React from 'react';
import Fuse from 'fuse.js';
import { tokens as allTokens } from '@project44-manifest/design-tokens';
import {
  Stack,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TextField,
} from '@project44-manifest/react';
import { Search } from '@project44-manifest/react-icons';
import { Token, TokenCategory } from '../Token';

const fuse = new Fuse(allTokens, {
  threshold: 0.25,
  keys: [
    { name: 'name', weight: 3 },
    { name: 'category', getFn: (token) => token.attributes.category, weight: 2 },
  ],
});

const getTokens = (currentSearchText?: string) =>
  currentSearchText ? fuse.search(currentSearchText).map((result) => result.item) : allTokens;

export function TokensTable() {
  const [searchText, setSearchText] = React.useState('');
  const [tokens, setTokens] = React.useState<typeof allTokens>([]);

  const handleSearch = React.useCallback((value: string) => {
    setSearchText(value);

    setTokens(getTokens(value));
  }, []);

  React.useEffect(() => {
    setTokens(getTokens());
  }, []);

  return (
    <Stack gap="large">
      <TextField startIcon={<Search />} value={searchText} onChange={handleSearch} />
      <Table className="tokens">
        <TableHeader>
          <TableRow>
            <TableColumn />
            <TableColumn>Name</TableColumn>
            <TableColumn>Value</TableColumn>
            <TableColumn>Description</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token) => (
            <Token
              key={token.name}
              category={token.attributes.category as TokenCategory}
              name={token.name}
              value={token.value}
            />
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
