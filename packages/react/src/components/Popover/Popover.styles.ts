import { css, pxToRem } from '../../styles';

export const useStyles = css({
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxSizing: 'border-box',
  boxShadow: '$medium',
  minHeight: pxToRem(16),
  minWidth: pxToRem(16),
  maxHeight: `cal(100% - ${pxToRem(32)})`,
  maxWidth: `cal(100% - ${pxToRem(32)})`,
  outline: 0,
  overflow: 'hidden auto',
  position: 'absolute',
  zIndex: '$popover',
});
