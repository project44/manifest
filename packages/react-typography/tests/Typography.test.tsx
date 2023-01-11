import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { Typography, TypographyVariant } from '../src';

describe('@project44-manifest/react-typography', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Typography>Hello World</Typography>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    render(<Typography>Hello World</Typography>);

    const typography = screen.getByText('Hello World');

    expect(typography.nodeName).toBe('P');
  });

  it.each`
    tag       | variant
    ${'H1'}   | ${'display'}
    ${'H2'}   | ${'heading'}
    ${'H3'}   | ${'title'}
    ${'H4'}   | ${'subtitle'}
    ${'P'}    | ${'body'}
    ${'P'}    | ${'bodyBold'}
    ${'SPAN'} | ${'caption'}
    ${'SPAN'} | ${'captionBold'}
    ${'SPAN'} | ${'subtext'}
    ${'SPAN'} | ${'subtextBold'}
  `('should render a $tag for the $variant variant', ({ tag, variant }) => {
    render(<Typography variant={variant as TypographyVariant}>Hello World</Typography>);

    const typography = screen.getByText('Hello World');

    expect(typography.nodeName).toBe(tag);
  });

  it('should render paragraphs correctly', () => {
    render(
      <Typography paragraph variant="title">
        Hello World
      </Typography>,
    );

    const typography = screen.getByText('Hello World');

    expect(typography.nodeName).toBe('P');
  });
});
