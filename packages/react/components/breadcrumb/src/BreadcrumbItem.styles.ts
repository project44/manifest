import { Icon } from '@project44-manifest/react-icon';
import { Link } from '@project44-manifest/react-link';
import { styled } from '@project44-manifest/react-styles';

export const StyledBreadcrumbItem = styled('li', {
  d: 'flex',
  alignItems: 'center',
  color: '$text-secondary',

  [`& ${Link}`]: {
    typography: '$subtext',
    color: 'inherit',
    textDecoration: 'none',
  },

  [`&:last-child ${Icon}`]: {
    display: 'none',
  },
});
