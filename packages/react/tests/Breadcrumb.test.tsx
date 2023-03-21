import { render, screen } from '@testing-library/react';
import { Breadcrumb } from '../src/components/Breadcrumb';
import { BreadcrumbItem } from '../src/components/BreadcrumbItem';

describe('breadcrumb', () => {
  it('should render crumb links', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="#home">Home</BreadcrumbItem>
        <BreadcrumbItem href="#catalog">Catalog</BreadcrumbItem>
        <BreadcrumbItem href="#products">Products</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Catalog')).toBeDefined();
    expect(screen.getByText('Products')).toBeDefined();

    const anchors = screen.getAllByRole('link');
    expect(anchors).toHaveLength(3);
  });
});
