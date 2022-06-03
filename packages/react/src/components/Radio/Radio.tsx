import * as React from 'react';
import {
  StyledRadio,
  StyledRadioLabel,
  StyledRadioIndicator,
  StyledRadioText,
} from './Radio.styles';
import { cx } from '../../styles';
import { ManifestProps } from '../../types';

export interface RadioProps extends ManifestProps, React.ComponentProps<typeof StyledRadio> {}

export const Radio = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => {
    const { as, children, css, className, disabled, value, ...other } = props;

    return (
      <StyledRadioLabel as={as} className="manifest-radio-label" css={css} isDisabled={disabled}>
        <StyledRadio
          {...other}
          className={cx('manifest-radio', className)}
          ref={forwardedRef}
          value={value}
        >
          <StyledRadioIndicator />
        </StyledRadio>
        {children && <StyledRadioText className="manifest-radio-text">{children}</StyledRadioText>}
      </StyledRadioLabel>
    );
  },
);
