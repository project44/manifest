import { renderHook } from '@testing-library/react';
import { useChildrenTextContent } from '../../..';

describe('useChildrenTextContent', () => {
  it('should return children text', () => {
    const children: React.ReactNode[] = ['lorem ipsum'];
    const { result } = renderHook(() => useChildrenTextContent(children));

    expect(result.current).toBe('lorem ipsum');
  });

  it('should ignore non-string children', () => {
    const children: React.ReactNode[] = [
      <p key="1">paragraph</p>,
      'lorem ipsum',
      <p key="2">another paragraph</p>,
      'dolor sit',
      <input key="3" />,
    ];
    const { result } = renderHook(() => useChildrenTextContent(children));

    expect(result.current).toBe('lorem ipsum dolor sit');
  });

  it('should return empty for non-text children', () => {
    const children: React.ReactNode[] = [<p key="1">paragraph</p>];
    const { result } = renderHook(() => useChildrenTextContent(children));

    expect(result.current).toBe('');
  });

  it('should gracefully handle empty input', () => {
    const children: React.ReactNode[] = [];
    const { result } = renderHook(() => useChildrenTextContent(children));

    expect(result.current).toBe('');
  });

  it('should gracefully handle undefined input', () => {
    const { result } = renderHook(() => useChildrenTextContent(undefined));

    expect(result.current).toBe('');
  });
});
