import { Pagination } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function PaginationExample() {
  return (
    <Pagination totalRowCount={100} />
  );
}

export default withDemoWrapper(PaginationExample);
