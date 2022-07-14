import { css } from '@project44-manifest/styles';

export const useCardStyles = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const useCardBodyStyles = css({
  alignItems: 'inherit',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: 'auto',
  justifyContent: 'inherit',
  position: 'relative',
  padding: '$large',
  typography: '$body',
  width: '100%',
});

export const useCardFooterStyles = css({
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  paddingBottom: '$large',
  px: '$large',
  width: '100%',
});

export const useCardHeaderStyles = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingTop: '$large',
  px: '$large',
  typography: '$title',
});

export type { CSS } from '@project44-manifest/styles';
export { cx } from '@project44-manifest/styles';
