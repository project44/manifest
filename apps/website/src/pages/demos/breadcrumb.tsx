import { Breadcrumb, BreadcrumbItem } from '@project44-manifest/react';
import { withDemoWrapper } from '../../components/DemoWrapper';

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#home">Home</BreadcrumbItem>
      <BreadcrumbItem href="#catalog">Catalog</BreadcrumbItem>
      <BreadcrumbItem href="#products">Products</BreadcrumbItem>
    </Breadcrumb>
  );
}

export default withDemoWrapper(BreadcrumbExample);
