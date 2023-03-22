import { styled } from '@project44-manifest/react-styles';
import { Pagination } from '../Pagination';

export const StyledDataTable = styled('div', {
  overflow: 'hidden',
  isolation: 'isolate',

  [`${Pagination}`]: {
    justifyContent: 'flex-end',
    paddingTop: '$large',
  },
});
