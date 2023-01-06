import * as React from 'react';
import { render } from '@project44-manifest/react-test-utils';
import type { ForwardRefComponent as ForwardReferenceComponent } from '../src';

type ButtonElement = 'button';

interface ButtonProperties {
  isDisabled?: boolean;
  isActive?: boolean;
}

const Button = React.forwardRef((properties, forwardedReference) => {
  const { as: Comp = 'button', ...other } = properties;

  return <Comp {...other} ref={forwardedReference} />;
}) as ForwardReferenceComponent<ButtonElement, ButtonProperties>;

interface ExtendedButtonProperties extends Omit<ButtonProperties, 'isActive'> {
  isExtended?: boolean;
}

const ExtendedButton = React.forwardRef((properties, forwardedReference) => {
  const { isExtended, ...extendedButtonProperties } = properties;

  return <Button {...extendedButtonProperties} ref={forwardedReference} />;
}) as ForwardReferenceComponent<ButtonElement, ExtendedButtonProperties>;

type LinkProperties = React.ComponentProps<'a'> & {
  isPrimary?: boolean;
  onToggle?: (open: boolean) => void;
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProperties>((properties, reference) => {
  const { children, isPrimary, ...linkProperties } = properties;

  return (
    <a ref={reference} className={isPrimary ? 'primary' : undefined} {...linkProperties}>
      {children}
    </a>
  );
});

/**
 * Our test assertions should always pass here however, the typescript compiler should fail
 * if the types are used incorrectly or does not generate the correct types.
 */
describe('@project44-manifest/react-types - polymorphic', () => {
  it('should render and not allow unsupported props', () => {
    const { container } = render(
      <>
        <Button />

        {/* Button accepts custom props */}
        <Button isDisabled />

        {/* Button accepts native props */}
        <Button type="submit" />

        {/* @ts-expect-error: button does not accept the href prop */}
        <Button href="#" />

        {/* Button accepts the native props of the `as` element */}
        <Button as="a" href="#" />

        <Button as={Link} href="#" />

        {/* ExtendedButton accepts isExtended prop */}
        <ExtendedButton isExtended />

        {/* ExtendedButton accepts isDisabled prop */}
        <ExtendedButton isDisabled />

        {/* @ts-expect-error: ExtendedButton should not allow omitted props */}
        <ExtendedButton isActive />

        {/* ExtendedButton as "a" accepts isExtended prop */}
        <ExtendedButton isExtended as="a" />

        {/* ExtendedButton as "a" accepts isDisabled prop */}
        <ExtendedButton isDisabled as="a" />
      </>,
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
