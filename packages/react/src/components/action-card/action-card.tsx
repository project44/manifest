import * as React from 'react';
import { ArrowRight } from '@project44-manifest/react-icons';
import { CSS, cx } from '@project44-manifest/react-styles';
import type { ForwardRefComponent } from '@project44-manifest/react-types';
import {
  StyledActionCard,
  StyledActionCardBody,
  StyledActionCardHeader,
  StyledActionCardImage,
} from './action-card.styles';

/* -------------------------------------------------------------------------------------------------
 * ActionCard
 * -----------------------------------------------------------------------------------------------*/

type ActionCardElement = 'a';

interface ActionCardProps {
  /** Theme aware style object */
  css?: CSS;
  /** The href link to navigate to when the card is clicked */
  href: string;
}

const ActionCard = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, href, css, ...other } = props;

  const className = cx('manifest-action-card', classNameProp);

  return (
    <StyledActionCard
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={css}
      href={href}
    >
      {children}
    </StyledActionCard>
  );
}) as ForwardRefComponent<ActionCardElement, ActionCardProps>;

/* -------------------------------------------------------------------------------------------------
 * ActionCardBody
 * -----------------------------------------------------------------------------------------------*/

type ActionCardBodyElement = 'div';

interface ActionCardBodyProps {
  /** Theme aware style object */
  css?: CSS;
}

const ActionCardBody = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-action-card-body', classNameProp);

  return (
    <StyledActionCardBody {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
    </StyledActionCardBody>
  );
}) as ForwardRefComponent<ActionCardBodyElement, ActionCardBodyProps>;

/* -------------------------------------------------------------------------------------------------
 * ActionCardHeader
 * -----------------------------------------------------------------------------------------------*/

type ActionCardHeaderElement = 'div';

interface ActionCardHeaderProps {
  /** Theme aware style object */
  css?: CSS;
}

const ActionCardHeader = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, ...other } = props;

  const className = cx('manifest-action-card-header', classNameProp);

  return (
    <StyledActionCardHeader {...other} ref={forwardedRef} as={as} className={className} css={css}>
      {children}
      <ArrowRight aria-hidden className="manifest-action-card-header__icon" />
    </StyledActionCardHeader>
  );
}) as ForwardRefComponent<ActionCardHeaderElement, ActionCardHeaderProps>;

/* -------------------------------------------------------------------------------------------------
 * ActionCardImage
 * -----------------------------------------------------------------------------------------------*/

type ActionCardImageElement = 'div';

interface ActionCardImageProps {
  /** Theme aware style object */
  css?: CSS;
  /**
   * The size of the card image
   *
   * @default 'large'
   */
  size?: 'large' | 'small';
  /** The source for the image */
  src: string;
}

const ActionCardImage = React.forwardRef((props, forwardedRef) => {
  const { as, children, className: classNameProp, css, size = 'large', src, ...other } = props;

  const className = cx('manifest-action-card-image', classNameProp, {
    [`manifest-action-card-image--${size}`]: size,
  });

  return (
    <StyledActionCardImage
      {...other}
      ref={forwardedRef}
      as={as}
      className={className}
      css={{ ...css, backgroundImage: `url(${src})` }}
      size={size}
    />
  );
}) as ForwardRefComponent<ActionCardImageElement, ActionCardImageProps>;

export type { ActionCardBodyProps, ActionCardHeaderProps, ActionCardImageProps, ActionCardProps };
export { ActionCard, ActionCardBody, ActionCardHeader, ActionCardImage };
