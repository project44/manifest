import * as React from 'react';
import {
  CSS,
  cx,
  useCardStyles,
  useCardBodyStyles,
  useCardFooterStyles,
  useCardHeaderStyles,
} from './Card.styles';

/**
 * -----------------------------------------------------------------------------------------------
 * Card
 * -----------------------------------------------------------------------------------------------
 */

type CardElement = React.ElementRef<'div'>;
type CardNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CardProps extends CardNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const Card = React.forwardRef<CardElement, CardProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useCardStyles({ css });

  return (
    <div {...other} className={cx('manifest-card', className, classNameProp)} ref={forwardedRef} />
  );
});

if (__DEV__) {
  Card.displayName = 'ManifestCard';
}

Card.toString = () => '.manifest-card';

/**
 * -----------------------------------------------------------------------------------------------
 * CardBody
 * -----------------------------------------------------------------------------------------------
 */

type CardBodyElement = React.ElementRef<'div'>;
type CardBodyNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CardBodyProps extends CardBodyNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CardBody = React.forwardRef<CardBodyElement, CardBodyProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useCardBodyStyles({ css });

  return (
    <div
      {...other}
      className={cx('manifest-card--body', className, classNameProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardBody.displayName = 'ManifestCardBody';
}

CardBody.toString = () => '.manifest-card--body';

/**
 * -----------------------------------------------------------------------------------------------
 * CardHeader
 * -----------------------------------------------------------------------------------------------
 */

type CardHeaderElement = React.ElementRef<'div'>;
type CardHeaderNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CardHeaderProps extends CardHeaderNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CardHeader = React.forwardRef<CardHeaderElement, CardHeaderProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useCardHeaderStyles({ css });

  return (
    <div
      {...other}
      className={cx('manifest-card--header', className, classNameProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardHeader.displayName = 'ManifestCardHeader';
}

CardHeader.toString = () => '.manifest-card--header';

/**
 * -----------------------------------------------------------------------------------------------
 * CardFooter
 * -----------------------------------------------------------------------------------------------
 */

type CardFooterElement = React.ElementRef<'div'>;
type CardFooterNativeProps = React.ComponentPropsWithoutRef<'div'>;

interface CardFooterProps extends CardFooterNativeProps {
  /**
   * Theme aware style object.
   */
  css?: CSS;
}

const CardFooter = React.forwardRef<CardFooterElement, CardFooterProps>((props, forwardedRef) => {
  const { className: classNameProp, css, ...other } = props;

  const { className } = useCardFooterStyles({ css });

  return (
    <div
      {...other}
      className={cx('manifest-card--footer', className, classNameProp)}
      ref={forwardedRef}
    />
  );
});

if (__DEV__) {
  CardFooter.displayName = 'ManifestCardFooter';
}

CardFooter.toString = () => '.manifest-card--footer';

export { Card, CardBody, CardFooter, CardHeader };
export type { CardProps, CardBodyProps, CardFooterProps, CardHeaderProps };
