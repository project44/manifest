import { act, renderHook } from '@testing-library/react';
import { useCopyToClipboard } from '../src';

const mockClipboard = {
  writeText: jest.fn(),
};

describe('useCopyToClipboard', () => {
  beforeAll(() => {
    Object.defineProperty(global.navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
      configurable: true,
    });
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should set copiedText to null initially', () => {
    const { result } = renderHook(() => useCopyToClipboard());
    expect(result.current.copiedText).toBeNull();
  });

  it('should copy text and update copiedText on successful copy', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const text = 'test text';

    await act(async () => {
      const success = await result.current.copy(text);
      expect(success).toBe(true);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    expect(result.current.copiedText).toBe(text);
  });

  it('should not update copiedText on unsuccessful copy', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const text = 'test text';
    (global.navigator.clipboard.writeText as jest.Mock).mockRejectedValueOnce(
      new Error('Copy failed'),
    );

    await act(async () => {
      const success = await result.current.copy(text);
      expect(success).toBe(false);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
    expect(result.current.copiedText).toBeNull();
  });

  it('should warn when navigator.clipboard is not supported', async () => {
    const { result } = renderHook(() => useCopyToClipboard());
    const text = 'test text';

    Object.defineProperty(global.navigator, 'clipboard', {
      value: null,
      writable: true,
      configurable: true,
    });

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    await act(async () => {
      const success = await result.current.copy(text);
      expect(success).toBe(false);
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith('Clipboard not supported');
    expect(result.current.copiedText).toBeNull();

    consoleWarnSpy.mockRestore();
  });
});
