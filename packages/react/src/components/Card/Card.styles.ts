import { styled } from '../../styles';
import { Primitive } from '@radix-ui/react-primitive';

export const StyledCard = styled(Primitive.div, {
  backgroundColor: '$background-surface',
  borderRadius: '$small',
  boxShadow: '$medium',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const StyledCardBody = styled(Primitive.div, {
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

export const StyledCardFooter = styled(Primitive.div, {
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'flex-end',
  paddingBottom: '1.25rem',
  paddingTop: '$large',
  px: '1.25rem',
  width: '100%',
});

export const StyledCardHeader = styled(Primitive.div, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  paddingTop: '1.25rem',
  paddingBottom: '$large',
  px: '1.25rem',
});
