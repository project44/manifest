import kebabCase from 'lodash.kebabcase';
import { TableCell, TableRow } from '@project44-manifest/react';

export type TokenCategory =
  | 'borderWidth'
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'radius'
  | 'shadow'
  | 'size'
  | 'space'
  | 'zIndex';

interface TokenProps {
  category: TokenCategory;
  name: string;
  value: number | string;
}

export function Token(props: TokenProps) {
  const { category, name, value } = props;

  const displayName = `$${kebabCase(name)}`;

  let Comp = <>_</>;

  if (category === 'borderWidth') {
    Comp = (
      <div
        className="token__preview"
        style={{
          backgroundColor: 'var(--ifm-color-emphasis-300)',
          height: value.toString(),
        }}
      />
    );
  }

  if (category === 'color') {
    Comp = (
      <div
        className="token__preview"
        style={{
          ...(name.includes('Brand')
            ? {
                background: value.toString(),
              }
            : {
                backgroundColor: value.toString(),
              }),
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--radius-small)',
        }}
      />
    );
  }

  if (category === 'fontFamily') {
    Comp = (
      <div
        className="token__preview"
        style={{
          fontFamily: value.toString(),
        }}
      >
        Aa
      </div>
    );
  }

  if (category === 'fontSize') {
    Comp = (
      <div
        className="token__preview"
        style={{
          fontSize: value.toString(),
        }}
      >
        Aa
      </div>
    );
  }

  if (category === 'fontWeight') {
    Comp = (
      <div
        className="token__preview"
        style={{
          fontWeight: value.toString(),
        }}
      >
        Aa
      </div>
    );
  }

  if (category === 'letterSpacing') {
    Comp = (
      <div
        className="token__preview"
        style={{
          letterSpacing: value.toString(),
        }}
      >
        Aa
      </div>
    );
  }

  if (category === 'lineHeight') {
    Comp = (
      <div
        className="token__preview"
        style={{
          lineHeight: value.toString(),
        }}
      >
        Aa
      </div>
    );
  }

  if (category === 'shadow') {
    Comp = (
      <div
        className="token__preview"
        style={{
          backgroundColor: 'var(--ifm-background-color)',
          boxShadow: value.toString(),
        }}
      />
    );
  }

  if (category === 'space') {
    Comp = (
      <div className="token__preview">
        <div
          style={{
            backgroundColor: 'var(--ifm-color-emphasis-300)',
            height: '1.5rem',
            width: value.toString(),
          }}
        />
      </div>
    );
  }

  if (category === 'radius') {
    Comp = (
      <div
        className="token__preview"
        style={{
          backgroundColor: 'var(--ifm-color-emphasis-300)',
          borderRadius: value.toString(),
        }}
      />
    );
  }

  return (
    <TableRow className="token">
      <TableCell>{Comp}</TableCell>
      <TableCell>{displayName}</TableCell>
      <TableCell>{value.toString()}</TableCell>
      <TableCell>_</TableCell>
    </TableRow>
  );
}
