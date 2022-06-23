import { styled } from '../../styles';

export const StyledCard = styled('div', {
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const StyledCardBody = styled('div', {
  alignItems: 'inherit',
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: 'auto',
  justifyContent: 'inherit',
  position: 'relative',
  px: '1.25rem',
  width: '100%',
});

export const StyledCardFooter = styled('div', {
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  paddingBottom: '1.25rem',
  paddingTop: '$large',
  px: '1.25rem',
  width: '100%',
});

export const StyledCardHeader = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingTop: '1.25rem',
  paddingBottom: '$large',
  px: '1.25rem',
});
