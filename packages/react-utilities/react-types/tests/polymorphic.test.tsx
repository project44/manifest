import * as React from 'react';
import { render } from '@project44-manifest/test-utils';
import { ForwardRefComponent } from '../src';

type ButtonElement = 'button';

interface ButtonProps {
	isDisabled?: boolean;
	isActive?: boolean;
}

const Button = React.forwardRef((props, forwardedRef) => {
	const { as: Comp = 'button', ...other } = props;

	return <Comp {...other} ref={forwardedRef} />;
}) as ForwardRefComponent<ButtonElement, ButtonProps>;

interface ExtendedButtonButtonProps extends Omit<ButtonProps, 'isActive'> {
	isExtended?: boolean;
}

const ExtendedButton = React.forwardRef((props, forwardedRef) => {
	const { isExtended, ...extendedButtonProps } = props;

	return <Button {...extendedButtonProps} ref={forwardedRef} />;
}) as ForwardRefComponent<ButtonElement, ExtendedButtonButtonProps>;

type LinkProps = React.ComponentProps<'a'> & {
	isPrimary?: boolean;
	onToggle?: (open: boolean) => void;
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
	const { children, isPrimary, ...linkProps } = props;

	return (
		<a ref={ref} className={isPrimary ? 'primary' : undefined} {...linkProps}>
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
