import { render, screen } from '@testing-library/react';
import { Card, CardBody, CardFooter, CardHeader } from '../src';

describe('card', () => {
  it('should render', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Lorem ipsum</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByText('Lorem ipsum')).toBeDefined();
    expect(screen.getByText('Footer')).toBeDefined();
  });
});
