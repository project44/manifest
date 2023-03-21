import { Breadcrumb, BreadcrumbItem } from '../src';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Default = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#home">Home</BreadcrumbItem>
    <BreadcrumbItem href="#catalog">Catalog</BreadcrumbItem>
    <BreadcrumbItem href="#products">Products</BreadcrumbItem>
  </Breadcrumb>
);

export const Collapsed = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#home">Home</BreadcrumbItem>
    <BreadcrumbItem href="#catalog">Catalog</BreadcrumbItem>
    <BreadcrumbItem href="#product">Product</BreadcrumbItem>
    <BreadcrumbItem href="#variants">Variants</BreadcrumbItem>
    <BreadcrumbItem href="#variant">Variant</BreadcrumbItem>
    <BreadcrumbItem href="#customizations">Customizations</BreadcrumbItem>
    <BreadcrumbItem href="#sizes">Sizes</BreadcrumbItem>
  </Breadcrumb>
);
