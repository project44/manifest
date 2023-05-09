import { styled } from '@project44-manifest/react-styles';
import { Link } from '../Link';

export const StyledBreadcrumb = styled('nav', {
  overflowX: 'auto',
});

export const StyledBreadcrumbList = styled('ol', {
  d: 'flex',
  listStyle: 'none',
  margin: 0,
  p: 0,
});

export const StyledBreadcrumbItem = styled('li', {
  d: 'flex',
  alignItems: 'center',
  color: '$text-secondary',

  [`& ${Link}`]: {
    typography: '$subtext',
    color: 'inherit',
    textDecoration: 'none',
  },

  '&:last-child .manifest-icon': {
    display: 'none',
  },
});
