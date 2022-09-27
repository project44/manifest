import * as tokens from '@project44-manifest/design-tokens';
import { baseTheme } from './base';
import merge from 'lodash.merge';

export const lightTheme = merge(baseTheme, {
	colors: {
		'background-danger': tokens.colorBackgroundDanger,
		'background-primary': tokens.colorBackgroundPrimary,
		'background-secondary': tokens.colorBackgroundSecondary,
		'background-side-nav': tokens.colorBackgroundSideNav,
		'background-success': tokens.colorBackgroundSuccess,
		'background-surface': tokens.colorBackgroundSurface,
		'background-tertiary': tokens.colorBackgroundTertiary,
		'background-top-nav': tokens.colorBackgroundTopNav,
		'background-warning': tokens.colorBackgroundWarning,
		'border-danger': tokens.colorBorderDanger,
		'border-disabled': tokens.colorBorderDisabled,
		'border-primary': tokens.colorBorderPrimary,
		'border-success': tokens.colorBorderSuccess,
		'border-warning': tokens.colorBorderWarning,
		'brand-default': tokens.colorBrandDefault,
		'brand-active': tokens.colorBrandActive,
		'brand-hover': tokens.colorBrandHover,
		'brand-gradient': tokens.colorBrandGradient,
		'primary-default': tokens.colorPrimaryDefault,
		'primary-active': tokens.colorPrimaryActive,
		'primary-hover': tokens.colorPrimaryHover,
		'text-contrast': tokens.colorTextContrast,
		'text-danger': tokens.colorTextDanger,
		'text-disabled': tokens.colorTextDisabled,
		'text-primary': tokens.colorTextPrimary,
		'text-secondary': tokens.colorTextSecondary,
		'text-success': tokens.colorTextSuccess,
		'text-tertiary': tokens.colorTextTertiary,
		'text-warning': tokens.colorTextWarning,
	},
});
